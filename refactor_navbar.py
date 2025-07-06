#!/usr/bin/env python3
"""
Script to refactor HTML files to use shared navbar component.
This script removes the existing navbar HTML from all files and adds
the navbar.js script reference instead.
"""

import os
import re
from pathlib import Path

def find_html_files(docs_dir):
    """Find all HTML files in the docs directory."""
    html_files = []
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

def remove_navbar_from_file(file_path):
    """Remove the navbar HTML from a file and add navbar.js script."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match the entire header section (navbar)
    header_pattern = r'<header class="py-3 fixed-top"[^>]*>.*?</header>'
    
    # Check if navbar exists
    if not re.search(header_pattern, content, re.DOTALL):
        print(f"No navbar found in {file_path}")
        return False
    
    # Remove the header
    content = re.sub(header_pattern, '', content, flags=re.DOTALL)
    
    # Determine the correct path for navbar.js based on file location
    relative_path = os.path.relpath(file_path, '/Users/dhairyaveera/SRMD/PKD_webapp/docs')
    if '/' in relative_path:  # File is in a subdirectory
        navbar_path = '../js/navbar.js'
    else:  # File is in root docs directory
        navbar_path = './js/navbar.js'
    
    # Add navbar.js script reference after the existing search.js script
    search_script_pattern = r'(<script src="[^"]*search\.js"></script>)'
    navbar_script = f'\\1\n    <script src="{navbar_path}"></script>'
    
    if re.search(search_script_pattern, content):
        content = re.sub(search_script_pattern, navbar_script, content)
    else:
        # If no search.js found, add it in the head section before closing </head>
        head_pattern = r'(</head>)'
        navbar_script_fallback = f'    <script src="{navbar_path}"></script>\n\\1'
        content = re.sub(head_pattern, navbar_script_fallback, content)
    
    # Write the modified content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {file_path}")
    return True

def main():
    """Main function to process all HTML files."""
    docs_dir = '/Users/dhairyaveera/SRMD/PKD_webapp/docs'
    
    if not os.path.exists(docs_dir):
        print(f"Error: Directory {docs_dir} not found")
        return
    
    html_files = find_html_files(docs_dir)
    
    if not html_files:
        print("No HTML files found")
        return
    
    print(f"Found {len(html_files)} HTML files")
    print("Starting navbar refactoring...\n")
    
    updated_count = 0
    for file_path in html_files:
        if remove_navbar_from_file(file_path):
            updated_count += 1
    
    print(f"\nRefactoring complete!")
    print(f"Updated {updated_count} out of {len(html_files)} files")
    print("\nNext steps:")
    print("1. Test the pages to ensure the navbar loads correctly")
    print("2. Check that all links work properly")
    print("3. Verify responsive behavior on mobile devices")

if __name__ == "__main__":
    main()