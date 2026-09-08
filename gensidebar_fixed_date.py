import os
import re
from datetime import datetime

docs_root = '/agent/files/rrbtc-wiki-docusaurus/docs'

def extract_date_from_dirname(dirname):
    """Parse date from directory name like 'presentation-2026-06-11' or 'presentation-2025-04'."""
    match = re.search(r'(\d{4})-(\d{2})-(\d{2})$', dirname)
    if match:
        try:
            return datetime(int(match.group(1)), int(match.group(2)), int(match.group(3)))
        except ValueError:
            pass
    match = re.search(r'(\d{4})-(\d{2})$', dirname)
    if match:
        try:
            return datetime(int(match.group(1)), int(match.group(2)), 1)
        except ValueError:
            pass
    return None

def extract_date_from_frontmatter(dirname):
    """Fallback: read date from the presentation's index.md frontmatter."""
    index_path = os.path.join(docs_root, 'presentations', dirname, 'index.md')
    if not os.path.isfile(index_path):
        return None
    try:
        with open(index_path, 'r') as f:
            content = f.read()
        match = re.search(r'^date:\s*["\']?(\d{4}-\d{2}-\d{2})["\']?', content, re.MULTILINE)
        if match:
            return datetime.strptime(match.group(1), '%Y-%m-%d')
    except Exception as e:
        print(f"Warning: could not read frontmatter from {index_path}: {e}")
    return None

def extract_date(dirname):
    """Get date: first from dirname, then from frontmatter."""
    dt = extract_date_from_dirname(dirname)
    if dt:
        return dt
    return extract_date_from_frontmatter(dirname)

# Process presentations: sort by date descending
presentations_dir = os.path.join(docs_root, 'presentations')
pres_dirs = []
for d in sorted(os.listdir(presentations_dir)):
    path = os.path.join(presentations_dir, d)
    if not os.path.isdir(path) or d.startswith('.'):
        continue
    pres_dirs.append(d)

dated = sorted([d for d in pres_dirs if extract_date(d)], key=lambda d: extract_date(d), reverse=True)
undated = sorted([d for d in pres_dirs if not extract_date(d)])
final_pres_dirs = dated + undated

presentations_subcats = []
for pres_dir in final_pres_dirs:
    pres_path = os.path.join(presentations_dir, pres_dir)
    items = []
    index_path = os.path.join('presentations', pres_dir, 'index')
    items.append({'type': 'doc', 'id': index_path, 'label': 'Deck Overview'})
    
    slide_files = sorted([f for f in os.listdir(pres_path) if f.endswith('.md') and f != 'index.md'])
    for sf in slide_files:
        num = ''.join(ch for ch in sf if ch.isdigit())
        slide_label = 'Slide ' + str(int(num)) if num else 'Slide ' + sf
        slide_id = os.path.join('presentations', pres_dir, sf[:-3])
        items.append({'type': 'doc', 'id': slide_id, 'label': slide_label})
    
    label = pres_dir.replace('-', ' ').title()
    presentations_subcats.append({
        'type': 'category',
        'label': label,
        'collapsed': True,
        'items': items
    })

# Process other categories
other_categories = {}
all_category_names = []
for dir_name in sorted(os.listdir(docs_root)):
    dir_path = os.path.join(docs_root, dir_name)
    if not os.path.isdir(dir_path) or dir_name.startswith('.') or dir_name == 'presentations':
        continue
    
    items = []
    for file in sorted(os.listdir(dir_path)):
        if file.endswith('.md') and file != 'README.md':
            id_path = os.path.join(dir_name, file[:-3])
            label = file[:-3].replace('-', ' ').title()
            items.append({'type': 'doc', 'id': id_path, 'label': label})
    
    if items:
        label = dir_name.replace('-', ' ').title()
        other_categories[dir_name] = {
            'type': 'category',
            'label': label,
            'link': {'type': 'doc', 'id': dir_name + '/README'},
            'items': items
        }
        all_category_names.append(dir_name)

# Build final categories list in alphabetical order, inserting presentations in its place
presentations_category = {
    'type': 'category',
    'label': 'Presentations',
    'collapsed': True,
    'items': presentations_subcats
}

# Insert 'presentations' into the sorted list at the right alphabetical position
all_category_names.append('presentations')
all_category_names_sorted = sorted(all_category_names)

categories = []
for name in all_category_names_sorted:
    if name == 'presentations':
        categories.append(presentations_category)
    else:
        categories.append(other_categories[name])

# Build JS output
js_lines = []
js_lines.append('// Auto-generated sidebar')
js_lines.append('module.exports = {')
js_lines.append('  wikiSidebar: [')
js_lines.append('    {')
js_lines.append('      type: "doc",')
js_lines.append('      id: "index",')
js_lines.append('      label: "Welcome",')
js_lines.append('    },')

for i, cat in enumerate(categories):
    js_lines.append('    {')
    js_lines.append(f'      type: "{cat["type"]}",')
    js_lines.append(f'      label: "{cat["label"]}",')
    
    if 'link' in cat:
        js_lines.append('      link: {')
        js_lines.append(f'        type: "{cat["link"]["type"]}",')
        js_lines.append(f'        id: "{cat["link"]["id"]}"')
        js_lines.append('      },')
    
    if 'items' in cat and len(cat['items']) > 0:
        if cat['items'][0].get('type') == 'category':
            js_lines.append('      items: [')
            for j, subcat in enumerate(cat['items']):
                js_lines.append('        {')
                js_lines.append(f'          type: "{subcat["type"]}",')
                js_lines.append(f'          label: "{subcat["label"]}",')
                if 'collapsed' in subcat:
                    js_lines.append(f'          collapsed: {str(subcat["collapsed"]).lower()},')
                js_lines.append('          items: [')
                for k, item in enumerate(subcat['items']):
                    js_lines.append('            {')
                    js_lines.append(f'              type: "{item["type"]}",')
                    js_lines.append(f'              id: "{item["id"]}",')
                    js_lines.append(f'              label: "{item["label"]}"')
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
            js_lines.append('      items: [')
            for j, item in enumerate(cat['items']):
                js_lines.append('        {')
                js_lines.append(f'          type: "{item["type"]}",')
                js_lines.append(f'          id: "{item["id"]}",')
                js_lines.append(f'          label: "{item["label"]}"')
                if j < len(cat['items']) - 1:
                    js_lines.append('        },')
                else:
                    js_lines.append('        }')
            js_lines.append('      ]')
    
    js_lines.append('    },')

# Add Change Log at the end
js_lines.append('    {')
js_lines.append('      type: "doc",')
js_lines.append('      id: "log",')
js_lines.append('      label: "Change Log"')
js_lines.append('    }')

js_lines.append('  ],')
js_lines.append('};')
js_lines.append('')

output_path = '/agent/files/rrbtc-wiki-docusaurus/sidebars.js'
with open(output_path, 'w') as f:
    f.write('\n'.join(js_lines))

print('=== Final sidebar order ===')
for cat in categories:
    print(f'  - {cat["label"]}')
print('  - Change Log')
