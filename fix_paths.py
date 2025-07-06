#!/usr/bin/env python3
"""
Fix relative paths in all subfolder files for static site generation
"""

import os
import re
from pathlib import Path

def fix_paths_in_file(file_path, relative_depth):
    """Fix all relative paths in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create the correct prefix based on depth
        prefix = '../' * relative_depth
        
        # Fix various path patterns
        patterns_to_fix = [
            # CSS links
            (r'href="\.\/css\/', f'href="{prefix}css/'),
            # JS scripts
            (r'src="\.\/js\/', f'src="{prefix}js/'),
            # Images
            (r'src="\.\/images\/', f'src="{prefix}images/'),
            # Navigation links
            (r'href="\.\/index\.html"', f'href="{prefix}index.html"'),
            (r'href="\.\/events\.html"', f'href="{prefix}events.html"'),
            (r'href="\.\/people\.html"', f'href="{prefix}people.html"'),
            (r'href="\.\/places\.html"', f'href="{prefix}places.html"'),
            (r'href="\.\/compositions\.html"', f'href="{prefix}compositions.html"'),
            (r'href="\.\/calendar\.html"', f'href="{prefix}calendar.html"'),
            (r'href="\.\/maps\.html"', f'href="{prefix}maps.html"'),
            # Internal links to other subpages
            (r'href="\.\/people\/', f'href="{prefix}people/'),
            (r'href="\.\/places\/', f'href="{prefix}places/'),
            (r'href="\.\/events\/', f'href="{prefix}events/'),
            (r'href="\.\/compositions\/', f'href="{prefix}compositions/'),
        ]
        
        # Apply all pattern fixes
        for pattern, replacement in patterns_to_fix:
            content = re.sub(pattern, replacement, content)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed paths in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    docs_dir = Path('/Users/dhairyaveera/SRMD/PKD_webapp/docs')
    
    # Define subdirectories that need path fixes
    subdirs_to_fix = [
        ('people', 1),      # 1 level deep
        ('places', 1),      # 1 level deep  
        ('events', 1),      # 1 level deep
        ('compositions', 1), # 1 level deep
    ]
    
    total_fixed = 0
    
    for subdir, depth in subdirs_to_fix:
        subdir_path = docs_dir / subdir
        if subdir_path.exists():
            print(f"\nFixing files in {subdir}/ folder...")
            
            # Find all HTML files in this subdirectory
            html_files = list(subdir_path.glob('*.html'))
            
            for html_file in html_files:
                if fix_paths_in_file(html_file, depth):
                    total_fixed += 1
    
    print(f"\n✅ Path fixing complete! Fixed {total_fixed} files.")
    print("\nNow all subfolder files should have correct relative paths.")
    print("Test by visiting: http://localhost:8000")

if __name__ == '__main__':
    main()