# Testimonials Template

This file contains template testimonials for the Adullam Academy website.
Edit the markdown files in `src/content/testimonials/` to update testimonials.

## How to Add Testimonials

1. Create a new `.md` file in `src/content/testimonials/`
2. Use the naming convention: `XX-role-name.md` (e.g., `04-parent-john.md`)
3. Copy the template below and fill in the details

## Template

```markdown
---
name: "Full Name or First Name"
role: "Parent"  # Options: Parent, Student, Pastor, Community Member
age: 14         # Optional: Only for students
image: ""       # Optional: filename in public/images/testimonials/
order: 1        # Display order (lower = first)
featured: true  # Whether to highlight this testimonial
published: true # Whether to show on the site
---

Your testimonial quote goes here. Keep it concise and impactful.
One to three sentences works best.
```

---

## Current Testimonials

### Testimonial 1 - Parent

- **Name**: Sarah M.
- **Role**: Parent
- **Quote**: "My son went from playing games all day to building them. The transformation has been incredible — and he's learning Scripture along the way!"
- **File**: `src/content/testimonials/01-parent-sarah.md`

---

### Testimonial 2 - Student

- **Name**: David
- **Role**: Student (Age 14)
- **Quote**: "I never thought I could build an actual app. Now I've made two and I'm working on my third!"
- **File**: `src/content/testimonials/02-student-david.md`

---

### Testimonial 3 - Pastor

- **Name**: Pastor James
- **Role**: Pastor
- **Quote**: "Finally, a program that doesn't separate faith from technology. Adullam Academy gets it right."
- **File**: `src/content/testimonials/03-pastor-james.md`

---

## Adding Images

1. Save the image in `public/images/testimonials/`
2. Use a consistent naming convention: `firstname-lastname.jpg`
3. Recommended size: 200x200px or larger (square aspect ratio)
4. Update the `image` field in the testimonial frontmatter

---

## Tips for Great Testimonials

1. **Be specific**: Mention concrete outcomes (e.g., "built two apps")
2. **Include emotion**: Share how the experience made them feel
3. **Keep it brief**: 1-3 sentences is ideal
4. **Highlight transformation**: Before vs. after stories resonate
5. **Include faith element**: Mention spiritual growth when relevant
