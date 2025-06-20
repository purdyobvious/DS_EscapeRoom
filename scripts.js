// 3D Room Scene Navigation Script
// This script handles keyboard navigation and additional interactive features

document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('.scene');
    const controls = {
        moveForward: document.getElementById('moveForward'),
        turnLeft: document.getElementById('turnLeft'),
        stop: document.getElementById('stop'),
        turnRight: document.getElementById('turnRight'),
        moveBack: document.getElementById('moveBack')
    };

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        switch(event.key.toLowerCase()) {
            case 'w':
            case 'arrowup':
                controls.moveForward.checked = true;
                event.preventDefault();
                break;
            case 'a':
            case 'arrowleft':
                controls.turnLeft.checked = true;
                event.preventDefault();
                break;
            case 's':
            case 'arrowdown':
                controls.moveBack.checked = true;
                event.preventDefault();
                break;
            case 'd':
            case 'arrowright':
                controls.turnRight.checked = true;
                event.preventDefault();
                break;
            case ' ':
            case 'escape':
                controls.stop.checked = true;
                event.preventDefault();
                break;
        }
    });

    // Auto-stop after movement delay (optional feature)
    let movementTimer;
    
    function startMovementTimer() {
        clearTimeout(movementTimer);
        movementTimer = setTimeout(() => {
            controls.stop.checked = true;
        }, 5000); // Auto-stop after 5 seconds
    }

    // Add event listeners to all navigation controls
    Object.values(controls).forEach(control => {
        if (control.id !== 'stop') {
            control.addEventListener('change', function() {
                if (this.checked) {
                    startMovementTimer();
                }
            });
        }
    });

    // Add visual feedback for active controls
    const controlLinks = document.querySelectorAll('#controls a');
    
    controlLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            controlLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Remove active class after animation
            setTimeout(() => {
                this.classList.remove('active');
            }, 300);
        });
    });

    // Add touch/mobile support
    let touchStartX = 0;
    let touchStartY = 0;
    const touchThreshold = 50;

    document.addEventListener('touchstart', function(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    });

    document.addEventListener('touchend', function(event) {
        if (!touchStartX || !touchStartY) return;

        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (Math.abs(deltaX) > touchThreshold) {
                if (deltaX > 0) {
                    controls.turnRight.checked = true;
                } else {
                    controls.turnLeft.checked = true;
                }
            }
        } else {
            // Vertical swipe
            if (Math.abs(deltaY) > touchThreshold) {
                if (deltaY > 0) {
                    controls.moveBack.checked = true;
                } else {
                    controls.moveForward.checked = true;
                }
            }
        }

        touchStartX = 0;
        touchStartY = 0;
    });

    // Performance optimization: pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            scene.style.animationPlayState = 'paused';
        } else {
            // Resume current animation state
            const checkedControl = document.querySelector('input[name="nav"]:checked');
            if (checkedControl && checkedControl.id !== 'stop') {
                // Animation will resume based on CSS rules
            }
        }
    });

    // Debug mode (press 'i' to toggle instructions visibility)
    let debugMode = false;
    const instructions = document.querySelector('.instructions');
    
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'i') {
            debugMode = !debugMode;
            instructions.style.display = debugMode ? 'block' : 'none';
        }
    });

    // Add CSS for active control feedback
    const style = document.createElement('style');
    style.textContent = `
        #controls a.active {
            background: rgba(197, 22, 22, 1) !important;
            color: white !important;
            transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
            .instructions {
                font-size: 12px;
                padding: 10px;
            }
            
            #controls {
                bottom: 10px;
            }
            
            #controls a {
                font-size: 20px;
                padding: 8px;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('3D Room Scene initialized successfully!');
    console.log('Controls: WASD or Arrow Keys, Spacebar/Escape to stop');
    console.log('Touch: Swipe to navigate on mobile devices');
    console.log('Press "i" to toggle instructions visibility');
});

document.querySelector('btn').addEventListener('click', () => {
    document.querySelector('.letter').classList.toggle('change');
});
