import os, json

docs_root = '/agent/files/rrbtc-wiki-docusaurus/docs'
categories = []
presentations_subcats = []

# Process each subdirectory in docs/
for dir_name in sorted(os.listdir(docs_root)):
    dir_path = os.path.join(docs_root, dir_name)
    if not os.path.isdir(dir_path):
        continue
    if dir_name.startswith('.'):
        continue

    if dir_name == 'presentations':
        # Handle presentations specially
        for pres_dir in sorted(os.listdir(dir_path), reverse=True):
            pres_path = os.path.join(dir_path, pres_dir)
            if not os.path.isdir(pres_path):
                continue
            if pres_dir.startswith('.'):
                continue
            # Collect index.md and slide-*.md files
            items = []
            # index.md
            index_path = os.path.join('presentations', pres_dir, 'index')
            items.append({'type': 'doc', 'id': index_path, 'label': 'Deck Overview'})
            # slide files
            slide_files = sorted([f for f in os.listdir(pres_path) if f.endswith('.md') and f != 'index.md'])
            for sf in slide_files:
                # extract slide number
                num = ''.join(ch for ch in sf if ch.isdigit())
                slide_label = 'Slide ' + str(int(num)) if num else 'Slide ' + sf
                slide_id = os.path.join('presentations', pres_dir, sf[:-3])  # remove .md
                items.append({'type': 'doc', 'id': slide_id, 'label': slide_label})
            # Format label: replace hyphens with spaces, title case
            label = pres_dir.replace('-', ' ').title()
            presentations_subcats.append({
                'type': 'category',
                'label': label,
                'collapsed': True,
                'items': items
            })
        # After processing all presentations, add the presentations category
        categories.append({
            'type': 'category',
            'label': 'Presentations',
            'collapsed': True,
            'items': presentations_subcats
        })
        continue

    # For other categories (concepts, comparisons, entities, queries, summaries)
    items = []
    for file in sorted(os.listdir(dir_path)):
        if file.endswith('.md') and file != 'README.md':
            # Remove .md extension
            id_path = os.path.join(dir_name, file[:-3])
            label = file[:-3].replace('-', ' ').title()
            items.append({'type': 'doc', 'id': id_path, 'label': label})
    if items:
        label = dir_name.replace('-', ' ').title()
        categories.append({
            'type': 'category',
            'label': label,
            'link': {'type': 'doc', 'id': dir_name + '/README'},
            'items': items
        })

# Build sidebar object
sidebar = {
    'wikiSidebar': [
        {'type': 'doc', 'id': 'index', 'label': 'Welcome'}
    ] + categories
}

# Check if log.md exists at docs/log.md
log_path = os.path.join(docs_root, 'log.md')
if os.path.isfile(log_path):
    # Insert before the last category? We'll append at end for now.
    sidebar['wikiSidebar'].append({'type': 'doc', 'id': 'log', 'label': 'Change Log'})

# Build JS lines
js_lines = []
js_lines.append('// Auto-generated sidebar')
js_lines.append('module.exports = {')
js_lines.append('  wikiSidebar: [')
# welcome
js_lines.append('    {')
js_lines.append('      type: "doc",')
js_lines.append('      id: "index",')
js_lines.append('      label: "Welcome",')
js_lines.append('    },')
for i, cat in enumerate(categories):
    js_lines.append('    {')
    js_lines.append('      type: "' + cat['type'] + '",')
    js_lines.append('      label: "' + cat['label'] + '",')
    if 'link' in cat:
        js_lines.append('      link: {')
        js_lines.append('        type: "' + cat['link']['type'] + '",')
        js_lines.append('        id: "' + cat['link']['id'] + '"')
        js_lines.append('      },')
    # Now handle items
    if 'items' in cat and len(cat['items']) > 0:
        # Check if the items are categories (i.e., the first item has a key 'type' and that is 'category')
        if cat['items'][0].get('type') == 'category':
            # This is a category of categories (like presentations)
            js_lines.append('      items: [')
            for j, subcat in enumerate(cat['items']):
                js_lines.append('        {')
                js_lines.append('          type: "' + subcat['type'] + '",')
                js_lines.append('          label: "' + subcat['label'] + '",')
                if 'collapsed' in subcat:
                    js_lines.append('          collapsed: ' + str(subcat['collapsed']).lower() + ',')
                js_lines.append('          items: [')
                for k, item in enumerate(subcat['items']):
                    js_lines.append('            {')
                    js_lines.append('              type: "' + item['type'] + '",')
                    js_lines.append('              id: "' + item['id'] + '",')
                    js_lines.append('              label: "' + item['label'] + '"')
                    if k < len(subcat['items']) - 1:
                        js_lines.append('            },')
                    else:
                        js_lines.append('            }')
                js_lines.append('          ]')
                if j < len(cat['items']) - 1:
                    js_lines.append('        },')
                else:
                    js_lines.append('        }')
            js_lines.append('      ]')
        else:
            # This is a regular category with items being docs
            js_lines.append('      items: [')
            for j, item in enumerate(cat['items']):
                js_lines.append('        {')
                js_lines.append('          type: "' + item['type'] + '",')
                js_lines.append('              id: "' + item['id'] + '",')
                js_lines.append('              label: "' + item['label'] + '"')
                if j < len(cat['items']) - 1:
                    js_lines.append('        },')
                else:
                    js_lines.append('        }')
            js_lines.append('      ]')
    js_lines.append('    }' + (',' if i < len(categories) - 1 else ''))
js_lines.append('  ],')
js_lines.append('};')
js_lines.append('')

output_path = '/agent/files/rrbtc-wiki-docusaurus/sidebars.js'
with open(output_path, 'w') as f:
    f.write('\\n'.join(js_lines))

print('Regenerated', output_path)
print('Categories:')
for cat in categories:
    if cat['type'] == 'category' and 'label' in cat:
        if 'items' in cat and isinstance(cat['items'][0], dict) and cat['items'][0].get('type') == 'category':
            # presentations case
            total = sum(len(subcat['items']) for subcat in cat['items'])
            print('  {}: {} subcategories, {} total items'.format(cat['label'], len(cat['items']), total))
        else:
            print('  {}: {} items'.format(cat['label'], len(cat.get('items', []))))
