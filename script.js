function switchTab(tabId) {
    // Hide all
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    // Show one
    document.getElementById(tabId).classList.add('active');
    
    // Active button logic
    const btns = document.querySelectorAll('.tab-btn');
    if(tabId === 'tab-watermark') btns[0].classList.add('active');
    if(tabId === 'tab-linkcheck') btns[1].classList.add('active');
    if(tabId === 'tab-cleaner') btns[2].classList.add('active');
}