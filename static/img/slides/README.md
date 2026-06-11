# SpeakerDeck Slide Images

This directory contains JPG sequences of all SpeakerDeck presentations from the Round Rock Bitcoiners meetups.

## Adding New Decks

1. Extract text from the new SpeakerDeck URL and save to `raw/<deck-name>.md` with canonical frontmatter.
2. Run `/agent/files/download_speakerdeck_slides.py` to fetch slide images.
3. Commit both raw text extraction and slide images.
4. Create/update wiki pages from the extracted text.

Note: SpeakerDeck PDF downloads are only available if the presenter enables them. JPG sequences are the best available fallback.
