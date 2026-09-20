#!/bin/bash
# sync-portfolio.sh - Sync root files to public/ folder
# Run this after any changes to index.html, style.css, or script.js

PORTFOLIO_ROOT="/home/arijitsharma/.gemini/antigravity-ide/scratch/zenith-portfolio"
PUBLIC="$PORTFOLIO_ROOT/public"

echo "🔄 Syncing portfolio files..."

cp "$PORTFOLIO_ROOT/index.html" "$PUBLIC/portfolio.html" && echo "  ✓ index.html → public/portfolio.html"
cp "$PORTFOLIO_ROOT/style.css"  "$PUBLIC/style.css"      && echo "  ✓ style.css  → public/style.css"
cp "$PORTFOLIO_ROOT/script.js"  "$PUBLIC/script.js"      && echo "  ✓ script.js  → public/script.js"

# Sync any new images
rsync -av --quiet "$PORTFOLIO_ROOT/images/" "$PUBLIC/images/" && echo "  ✓ images/    → public/images/"

echo "✅ Sync complete!"
echo ""
echo "📍 Serving at:"
echo "   Static (port 5055):  http://localhost:5055"
echo "   Next.js (port 3000): http://localhost:3000"
