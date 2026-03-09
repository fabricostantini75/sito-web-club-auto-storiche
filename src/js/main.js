document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Optional: prevent scrolling when nav is open
        });

        // Close nav when a link is clicked (for mobile)
        navList.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Event Signup Modal Logic (for events.html)
    const modal = document.getElementById('event-signup-modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButton = document.querySelector('.close-button');
    const modalEventName = document.getElementById('modal-event-name');
    const modalEventId = document.getElementById('modal-event-id');
    const modalEventNameHidden = document.getElementById('modal-event-name-hidden');

    if (modal && openModalButtons.length > 0) {
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const eventId = button.dataset.eventId;
                const eventName = button.dataset.eventName;

                modalEventName.textContent = eventName;
                modalEventId.value = eventId;
                modalEventNameHidden.value = eventName; // Set hidden field for form submission

                modal.classList.add('show');
                document.body.classList.add('no-scroll');
            });
        });

        closeModalButton.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // Gallery Filtering Logic (for gallery.html)
    const filterButtons = document.querySelectorAll('.gallery-filters .btn');
    const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');

                const filter = button.dataset.filter;

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category.includes(filter)) {
                        item.style.display = 'block'; // Or 'grid-item' if using display:grid
                        item.style.animation = 'fadeIn 0.5s ease-out forwards';
                    } else {
                        item.style.display = 'none';
                        item.style.animation = 'none';
                    }
                });
            });
        });
    }

    // Simple form submission alert for admin-events.html
    const adminEventForm = document.querySelector('.event-creation-form');
    if (adminEventForm) {
        adminEventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Evento creato (simulato)! Per una funzionalità reale, è necessario un backend.');
            adminEventForm.reset();
        });
    }
});

// Optional: Add a class to body when scrolling for header effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
