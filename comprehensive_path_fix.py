#!/usr/bin/env python3
"""
Comprehensive fix for all relative paths in static site
"""

import os
import re
from pathlib import Path

def fix_all_paths():
    """Fix all relative paths across the entire static site"""
    docs_dir = Path('/Users/dhairyaveera/SRMD/PKD_webapp/docs')
    
    print("🔧 Starting comprehensive path fixes...")
    
    # Fix root level files (should use ./paths)
    root_files = list(docs_dir.glob('*.html'))
    for file_path in root_files:
        fix_root_level_file(file_path)
    
    # Fix subfolder files (should use ../paths)
    subfolders = ['people', 'places', 'events', 'compositions']
    for subfolder in subfolders:
        subfolder_path = docs_dir / subfolder
        if subfolder_path.exists():
            html_files = list(subfolder_path.glob('*.html'))
            for file_path in html_files:
                fix_subfolder_file(file_path)
    
    print("✅ All path fixes complete!")

def fix_root_level_file(file_path):
    """Fix paths in root level HTML files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Ensure root level files use ./ paths
        patterns = [
            # CSS and JS
            (r'href="(?:\.\./)?css/', 'href="./css/'),
            (r'src="(?:\.\./)?js/', 'src="./js/'),
            (r'src="(?:\.\./)?images/', 'src="./images/'),
            # Navigation links
            (r'href="(?:\.\./)?index\.html"', 'href="./index.html"'),
            (r'href="(?:\.\./)?events\.html"', 'href="./events.html"'),
            (r'href="(?:\.\./)?people\.html"', 'href="./people.html"'),
            (r'href="(?:\.\./)?places\.html"', 'href="./places.html"'),
            (r'href="(?:\.\./)?compositions\.html"', 'href="./compositions.html"'),
            (r'href="(?:\.\./)?calendar\.html"', 'href="./calendar.html"'),
            (r'href="(?:\.\./)?maps\.html"', 'href="./maps.html"'),
            (r'href="(?:\.\./)?search\.html"', 'href="./search.html"'),
            # Subfolder links
            (r'href="(?:\.\./)?people/', 'href="./people/'),
            (r'href="(?:\.\./)?places/', 'href="./places/'),
            (r'href="(?:\.\./)?events/', 'href="./events/'),
            (r'href="(?:\.\./)?compositions/', 'href="./compositions/'),
        ]
        
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Fixed root file: {file_path.name}")
        
    except Exception as e:
        print(f"✗ Error fixing {file_path}: {e}")

def fix_subfolder_file(file_path):
    """Fix paths in subfolder HTML files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Ensure subfolder files use ../ paths
        patterns = [
            # CSS and JS - fix any incorrect paths
            (r'href="(?:\.\/)?css/', 'href="../css/'),
            (r'src="(?:\.\/)?js/', 'src="../js/'),
            (r'src="(?:\.\/)?images/', 'src="../images/'),
            # Navigation links - fix any incorrect paths
            (r'href="(?:\.\/)?index\.html"', 'href="../index.html"'),
            (r'href="(?:\.\/)?events\.html"', 'href="../events.html"'),
            (r'href="(?:\.\/)?people\.html"', 'href="../people.html"'),
            (r'href="(?:\.\/)?places\.html"', 'href="../places.html"'),
            (r'href="(?:\.\/)?compositions\.html"', 'href="../compositions.html"'),
            (r'href="(?:\.\/)?calendar\.html"', 'href="../calendar.html"'),
            (r'href="(?:\.\/)?maps\.html"', 'href="../maps.html"'),
            (r'href="(?:\.\/)?search\.html"', 'href="../search.html"'),
            # Subfolder links - fix any incorrect paths
            (r'href="(?:\.\/)?people/', 'href="../people/'),
            (r'href="(?:\.\/)?places/', 'href="../places/'),
            (r'href="(?:\.\/)?events/', 'href="../events/'),
            (r'href="(?:\.\/)?compositions/', 'href="../compositions/'),
        ]
        
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Fixed subfolder file: {file_path.name}")
        
    except Exception as e:
        print(f"✗ Error fixing {file_path}: {e}")

def verify_paths():
    """Verify that all paths are correct"""
    docs_dir = Path('/Users/dhairyaveera/SRMD/PKD_webapp/docs')
    issues = []
    
    print("\n🔍 Verifying all paths...")
    
    # Check root files
    root_files = list(docs_dir.glob('*.html'))
    for file_path in root_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Look for incorrect patterns in root files
        if re.search(r'href="../', content) or re.search(r'src="../', content):
            issues.append(f"Root file {file_path.name} has ../ paths (should be ./)")
    
    # Check subfolder files
    subfolders = ['people', 'places', 'events', 'compositions']
    for subfolder in subfolders:
        subfolder_path = docs_dir / subfolder
        if subfolder_path.exists():
            html_files = list(subfolder_path.glob('*.html'))
            for file_path in html_files:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Look for incorrect patterns in subfolder files
                if (re.search(r'href="\.\/(?:css|js|images|index|events|people|places|compositions|calendar|maps)', content) or
                    re.search(r'src="\.\/(?:css|js|images)', content)):
                    issues.append(f"Subfolder file {subfolder}/{file_path.name} has ./ paths (should be ../)")
    
    if issues:
        print("⚠️  Found path issues:")
        for issue in issues:
            print(f"  - {issue}")
        return False
    else:
        print("✅ All paths verified correct!")
        return True

if __name__ == '__main__':
    fix_all_paths()
    verify_paths()