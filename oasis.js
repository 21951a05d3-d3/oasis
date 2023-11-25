<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oasis Landing Page</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>
<body>
    <header>
        <h1>Welcome to Oasis</h1>
    </header>

    <section>
        <h2>Discover a new world of possibilities</h2>
        <p>Join us on a journey to explore the Oasis and unlock a world of opportunities and adventures.</p>
        <a href="#get-started-section" class="cta-button">Get Started</a>
    </section>

    <!-- Add an id to the section you want to scroll to -->
    <section id="get-started-section">
        <h2>Get Started</h2>
        <p>This is the section you'll scroll to.</p>
    </section>

    <script>
        // JavaScript for smooth scrolling
        document.addEventListener('DOMContentLoaded', function() {
            const scrollLinks = document.querySelectorAll('a[href^="#"]');

            scrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                });
            });
        });
    </script>
</body>
</html>
