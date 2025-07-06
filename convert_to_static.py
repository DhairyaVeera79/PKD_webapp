#!/usr/bin/env python3
"""
Convert Flask website to static HTML files for GitHub Pages
"""

import os
import shutil
from jinja2 import Environment, FileSystemLoader
from urllib.parse import urljoin

class StaticSiteGenerator:
    def __init__(self, template_dir='src', output_dir='docs'):
        self.template_dir = template_dir
        self.output_dir = output_dir
        self.env = Environment(loader=FileSystemLoader(template_dir))
        
        # URL mapping for static generation
        self.routes = {
            '/': 'index.html',
            '/events': 'events.html',
            '/events/avdhan': 'events/avdhan.html',
            '/events/chitrapat': 'events/chitrapat.html',
            '/people': 'people.html',
            '/people/devba': 'people/devba.html',
            '/people/juthabhai': 'people/juthabhai.html',
            '/people/saubhagyabhai': 'people/saubhagyabhai.html',
            '/people/ravjibhai': 'people/ravjibhai.html',
            '/people/javalben': 'people/javalben.html',
            '/people/bhagvanbhaiModi': 'people/bhagvanbhaiModi.html',
            '/people/ranchodbhai': 'people/ranchodbhai.html',
            '/people/brahmachariji': 'people/brahmachariji.html',
            '/people/chanchalben': 'people/chanchalben.html',
            '/people/pranjivandas': 'people/pranjivandas.html',
            '/people/janbai': 'people/janbai.html',
            '/people/shivkunvarben': 'people/shivkunvarben.html',
            '/people/chatrabhujbhaiBechar': 'people/chatrabhujbhaiBechar.html',
            '/people/jhabakben': 'people/jhabakben.html',
            '/people/vinaychandrabhaiPopatbhaiDaftary': 'people/vinaychandrabhaiPopatbhaiDaftary.html',
            '/people/shankarlalBhatt': 'people/shankarlalBhatt.html',
            '/people/maneklalGhelabhai': 'people/maneklalGhelabhai.html',
            '/people/revashankarJagjivan': 'people/revashankarJagjivan.html',
            '/people/tribhuvanBhanji': 'people/tribhuvanBhanji.html',
            '/people/popatbhaiJagjivan': 'people/popatbhaiJagjivan.html',
            '/people/gandhiji': 'people/gandhiji.html',
            '/places': 'places.html',
            '/places/vavaniya': 'places/vavaniya.html',
            '/places/morbi': 'places/morbi.html',
            '/places/jamnagar': 'places/jamnagar.html',
            '/places/wadhwan': 'places/wadhwan.html',
            '/places/limbdi': 'places/limbdi.html',
            '/places/botad': 'places/botad.html',
            '/places/jetpar': 'places/jetpar.html',
            '/places/ahmedabad': 'places/ahmedabad.html',
            '/places/rajkot': 'places/rajkot.html',
            '/places/mumbai': 'places/mumbai.html',
            '/places/idar': 'places/idar.html',
            '/places/dharampur': 'places/dharampur.html',
            '/compositions': 'compositions.html',
            '/compositions/mokshmala': 'compositions/mokshmala.html',
            '/compositions/bhavnabodh': 'compositions/bhavnabodh.html',
            '/calendar': 'calendar.html',
            '/maps': 'map.html'
        }
    
    def url_for(self, endpoint, **values):
        """Mock Flask's url_for function for static generation"""
        # Map Flask route names to static paths
        route_mapping = {
            'index': '/',
            'events': '/events',
            'avdhan': '/events/avdhan',
            'chitrapat': '/events/chitrapat',
            'people': '/people',
            'devba': '/people/devba',
            'juthabhai': '/people/juthabhai',
            'saubhagyabhai': '/people/saubhagyabhai',
            'ravjibhai': '/people/ravjibhai',
            'javalben': '/people/javalben',
            'bhagvanbhaiModi': '/people/bhagvanbhaiModi',
            'ranchodbhai': '/people/ranchodbhai',
            'brahmachariji': '/people/brahmachariji',
            'chanchalben': '/people/chanchalben',
            'pranjivandas': '/people/pranjivandas',
            'janbai': '/people/janbai',
            'shivkunvarben': '/people/shivkunvarben',
            'chatrabhujbhaiBechar': '/people/chatrabhujbhaiBechar',
            'jhabakben': '/people/jhabakben',
            'vinaychandrabhaiPopatbhaiDaftary': '/people/vinaychandrabhaiPopatbhaiDaftary',
            'shankarlalBhatt': '/people/shankarlalBhatt',
            'maneklalGhelabhai': '/people/maneklalGhelabhai',
            'revashankarJagjivan': '/people/revashankarJagjivan',
            'tribhuvanBhanji': '/people/tribhuvanBhanji',
            'popatbhaiJagjivan': '/people/popatbhaiJagjivan',
            'gandhiji': '/people/gandhiji',
            'places': '/places',
            'vavaniya': '/places/vavaniya',
            'morbi': '/places/morbi',
            'jamnagar': '/places/jamnagar',
            'wadhwan': '/places/wadhwan',
            'limbdi': '/places/limbdi',
            'botad': '/places/botad',
            'jetpar': '/places/jetpar',
            'ahmedabad': '/places/ahmedabad',
            'rajkot': '/places/rajkot',
            'mumbai': '/places/mumbai',
            'idar': '/places/idar',
            'dharampur': '/places/dharampur',
            'compositions': '/compositions',
            'mokshmala': '/compositions/mokshmala',
            'bhavnabodh': '/compositions/bhavnabodh',
            'calendar': '/calendar',
            'maps': '/maps'
        }
        
        if endpoint == 'static':
            # Handle static files
            filename = values.get('filename', '')
            return f"./{filename}"
        
        route = route_mapping.get(endpoint, '/')
        return f".{route}.html" if route != '/' else './index.html'
    
    def setup_output_directory(self):
        """Create output directory and copy static assets"""
        if os.path.exists(self.output_dir):
            shutil.rmtree(self.output_dir)
        os.makedirs(self.output_dir)
        
        # Copy static assets
        static_dirs = ['css', 'js', 'images', 'databases']
        for static_dir in static_dirs:
            src_path = os.path.join(self.template_dir, static_dir)
            if os.path.exists(src_path):
                dst_path = os.path.join(self.output_dir, static_dir)
                shutil.copytree(src_path, dst_path)
                print(f"Copied {static_dir}/ to {self.output_dir}/{static_dir}/")
    
    def generate_static_files(self):
        """Generate static HTML files from templates"""
        self.setup_output_directory()
        
        # Add url_for function to Jinja environment
        self.env.globals['url_for'] = self.url_for
        
        for route, template_path in self.routes.items():
            try:
                # Load and render template
                template = self.env.get_template(template_path)
                rendered_html = template.render()
                
                # Determine output path
                if route == '/':
                    output_path = os.path.join(self.output_dir, 'index.html')
                else:
                    # Remove leading slash and add .html extension
                    output_path = os.path.join(self.output_dir, route.lstrip('/') + '.html')
                
                # Create directory if needed
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                
                # Write rendered HTML
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(rendered_html)
                
                print(f"Generated: {output_path}")
                
            except Exception as e:
                print(f"Error generating {route}: {e}")
    
    def create_github_pages_config(self):
        """Create necessary GitHub Pages configuration files"""
        # Create .nojekyll file to bypass Jekyll processing
        nojekyll_path = os.path.join(self.output_dir, '.nojekyll')
        with open(nojekyll_path, 'w') as f:
            f.write('')
        print("Created .nojekyll file")
        
        # Create basic 404.html
        try:
            template = self.env.get_template('base.html')
            error_content = '''
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center">
                        <h1>404 - Page Not Found</h1>
                        <p>The page you're looking for doesn't exist.</p>
                        <a href="./index.html" class="btn btn-primary">Go Home</a>
                    </div>
                </div>
            </div>
            '''
            
            # Create a simple 404 page
            with open(os.path.join(self.output_dir, '404.html'), 'w', encoding='utf-8') as f:
                f.write(f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    {error_content}
</body>
</html>''')
            print("Created 404.html")
        except Exception as e:
            print(f"Could not create 404.html: {e}")

def main():
    print("Converting Flask website to static files for GitHub Pages...")
    generator = StaticSiteGenerator()
    generator.generate_static_files()
    generator.create_github_pages_config()
    print(f"\nConversion complete! Static files are in the '{generator.output_dir}' directory.")
    print("\nTo deploy to GitHub Pages:")
    print("1. Commit the 'docs' folder to your repository")
    print("2. Go to your repository settings on GitHub")
    print("3. Scroll to 'Pages' section")
    print("4. Select 'Deploy from a branch'")
    print("5. Choose 'main' branch and '/docs' folder")
    print("6. Save and your site will be live!")

if __name__ == '__main__':
    main()