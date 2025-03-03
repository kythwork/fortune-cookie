document.addEventListener('DOMContentLoaded', () => {
    const cookies = document.querySelectorAll('.cookies img');
    const modal = document.getElementById('fortuneModal');
    const fortuneText = document.getElementById('fortuneText');
    const cookieHeader = document.getElementById('cookieHeader');
    const modalImg = document.querySelector('.modal-content img');
    const closeButton = document.querySelector('.close-button');

    const cookieTitles = [
        "Chocolate Chip Cookie",
        "Matcha Cream Cookie",
        "Heart Sprinkles Sugar Cookie",
        "Danish Butter Cookie",
        "Gingerbread Cookie",
        "Jam Drops Cookie"
    ];

    const fortunes = [
        "There is a new hopefulness in your life, and it's inspiring all kinds of new ways of doing things. Your flexibility is at an all-time high, so get ready to stretch.",

        "It's all about you, and there's no reason to feel bad about that. One of the benefits of this situation is that you'll be able to let loose and express your opinions without any fear of reprisal, for many reasons.",

        "Fasten your seat belt. You're about to take flight, and that applies to every possible corner of your life but most especially to affairs of the heart.",

        " You have your own way of doing things, and that's okay. Skip the debates and dive in. You'll find that the day practically flies by while you make unbelievable progress.",

        "Help appears just when you need it the most, and it may even come without you having to ask. Your workplace or neighborhood karma shines when someone comes to your rescue just in the nick of time.",

        "All that hard work you've been doing lately? Believe it or not, even though no one has said anything yet, it hasn't gone unnoticed. In fact, you could be due for a raise, promotion, or bonus."
    ];

    // Function to open modal
    const openModal = () => {
        modal.dataset.scrollPosition = window.scrollY;
        document.body.classList.add('modal-open');
        modal.classList.add('show');
    };
    
    // Function to close modal
    const closeModal = () => {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
        window.scrollTo(0, modal.dataset.scrollPosition);
    };

    cookies.forEach((cookie, index) => {
        cookie.addEventListener('click', () => {
            modalImg.src = cookie.src;
            cookieHeader.textContent = cookieTitles[index];
            fortuneText.textContent = fortunes[index];
            openModal();
        });
    });

    // Close the modal when clicking the close button
    closeButton.addEventListener('click', closeModal);

});