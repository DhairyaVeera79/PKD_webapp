#!/usr/bin/env python3
"""
Add search.js script tag to all HTML files
"""

import os
import re
from pathlib import Path

def add_search_script_to_files():
    """Add search.js script tag to all HTML files that don't have it"""
    docs_dir = Path('/Users/dhairyaveera/SRMD/PKD_webapp/docs')
    
    print("🔧 Adding search.js script to all HTML files...")
    
    # Get all HTML files
    all_html_files = []
    
    # Root level files
    all_html_files.extend(list(docs_dir.glob('*.html')))
    
    # Subfolder files
    subfolders = ['people', 'places', 'events', 'compositions']
    for subfolder in subfolders:
        subfolder_path = docs_dir / subfolder
        if subfolder_path.exists():
            all_html_files.extend(list(subfolder_path.glob('*.html')))
    
    for file_path in all_html_files:
        add_search_script_to_file(file_path)
    
    print("✅ Search script added to all HTML files!")

def add_search_script_to_file(file_path):
    """Add search.js script tag to a single HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if search.js is already included
        if 'search.js' in content:
            print(f"✓ {file_path.name} already has search.js")
            return
        
        # Determine the correct path based on file location
        relative_depth = len(file_path.parts) - len(Path('/Users/dhairyaveera/SRMD/PKD_webapp/docs').parts) - 1
        script_path = '../' * relative_depth + 'js/search.js' if relative_depth > 0 else './js/search.js'
        
        # Find the closing </body> tag and add search.js before it
        script_tag = f'    <script src="{script_path}"></script>\n</body>'
        
        if '</body>' in content:
            content = content.replace('</body>', script_tag)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✓ Added search.js to {file_path.name}")
        else:
            print(f"⚠️  No </body> tag found in {file_path.name}")
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")

if __name__ == '__main__':
    add_search_script_to_files()