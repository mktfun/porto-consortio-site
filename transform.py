import re

with open("raw_stitch.html", "r", encoding="utf-8") as f:
    html = f.read()

# Extract body content
body_match = re.search(r"<body.*?>(.*)</body>", html, re.DOTALL)
if body_match:
    html = body_match.group(1)

# Remove script tags
html = re.sub(r"<script.*?>.*?</script>", "", html, flags=re.DOTALL)

# Convert class to className
html = html.replace('class=', 'className=')

# Convert self-closing tags
html = re.sub(r"<(img|input|br|hr)([^>]*?)(?<!/)>", r"<\1\2 />", html)

# Replace Tailwind custom classes
replacements = {
    "bg-primary": "bg-[#3b5bdb]",
    "text-primary": "text-[#3b5bdb]",
    "border-primary": "border-[#3b5bdb]",
    "from-primary": "from-[#3b5bdb]",
    "to-primary": "to-[#3b5bdb]",
    "hover:shadow-primary": "hover:shadow-[#3b5bdb]",
    
    "bg-accent": "bg-[#f59e0b]",
    "text-accent": "text-[#f59e0b]",
    "border-accent": "border-[#f59e0b]",
    
    "bg-background-light": "bg-[#f8fafc]",
    "dark:bg-background-dark": "dark:bg-[#0f172a]",
    
    "bg-surface-light": "bg-[#ffffff]",
    "dark:bg-surface-dark": "dark:bg-[#1e293b]",
    
    "shadow-glow": "shadow-[0_0_20px_-5px_rgba(59,91,219,0.5)]",
    "shadow-soft": "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]",
}

for k, v in replacements.items():
    html = html.replace(k, v)

# Process icons
def icon_replacer(match):
    icon_name = match.group(1).strip()
    mapping = {
        "light_mode": "Sun",
        "arrow_forward": "ArrowRight",
        "phone_in_talk": "Phone",
        "verified_user": "ShieldCheck",
        "priority_high": "AlertTriangle",
        "warning": "AlertTriangle",
        "arrow_right_alt": "ArrowRight",
        "local_shipping": "Truck",
        "inventory_2": "Package",
        "directions_boat": "Ship",
        "star": "Star",
        "star_half": "StarHalf",
        "lock": "Lock",
        "facebook": "Facebook",
        "photo_camera": "Camera",
        "business_center": "Briefcase",
        "phone": "Phone",
        "whatsapp": "MessageCircle",
        "email": "Mail",
        "location_on": "MapPin"
    }
    comp = mapping.get(icon_name, "Star")
    # match.group() was <span className="...">icon_name</span>
    # We need to extract the className
    return f"<{comp} className=\"w-5 h-5\" />"

html = re.sub(r'<span.*?material-icons-outlined.*?>(.*?)</span>', icon_replacer, html)

# Fix fill-rule
html = html.replace("fill-rule=", "fillRule=")
html = html.replace("fill-opacity=", "fillOpacity=")
html = html.replace("stroke-width=", "strokeWidth=")
html = html.replace("stroke-dasharray=", "strokeDashArray=")

with open("converted.jsx", "w", encoding="utf-8") as f:
    f.write(html)
