// 🎓 Certificate Maker - Because everyone deserves a fancy piece of paper!
// Created by Bene (The one who thinks certificates make everything official)
// Warning: May cause excessive pride and uncontrollable smiling 😊

// 🎯 Input Wizardry - Where your typing becomes certificate magic
document.getElementById('studentName').addEventListener('input', function() {
    document.getElementById('certStudentName').textContent = this.value || 'Student Name';
});

document.getElementById('achievement').addEventListener('input', function() {
    document.getElementById('certAchievement').textContent = this.value || 'Achievement';
});

document.getElementById('teacherName').addEventListener('input', function() {
    document.getElementById('certTeacherName').textContent = this.value || 'Teacher Name';
});

document.getElementById('date').addEventListener('input', function() {
    const date = new Date(this.value);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('certDate').textContent = date.toLocaleDateString('en-US', options);
});

document.getElementById('schoolName').addEventListener('input', function() {
    document.getElementById('certSchoolName').textContent = this.value || 'School Name';
});

// 🎨 Style Sorcery - Where we dress up your certificate in its finest robes
function updateCertificate() {
    const certificate = document.getElementById('certificate');
    const frameStyle = certificate.getAttribute('data-frame');
    
    // Reset all frame classes (like hitting the style reset button)
    certificate.classList.remove(
        'classic-frame', 'modern-frame', 'elegant-frame', 
        'vintage-frame', 'minimalist-frame', 'art-deco-frame',
        'floral-frame', 'academic-frame', 'playful-frame',
        'professional-frame'
    );
    
    // Add the new frame class (time for a makeover! 💅)
    if (frameStyle) {
        certificate.classList.add(`${frameStyle}-frame`);
    }
}

// 🌟 Decoration Magic - Making your certificate sparkle and shine
function updateDecorations() {
    const certificate = document.getElementById('certificate');
    const decorationStyle = certificate.getAttribute('data-decoration');
    const decorationElements = document.querySelectorAll('.decoration-element');
    
    // Clear existing decorations (poof! 💨)
    decorationElements.forEach(element => {
        element.textContent = '';
        // Remove all decoration classes
        element.classList.remove(
            'decoration-stars', 'decoration-laurel', 'decoration-academic',
            'decoration-flowers', 'decoration-ribbons', 'decoration-medals',
            'decoration-scrolls', 'decoration-geometric', 'decoration-confetti',
            'decoration-achievement'
        );
    });

    // Add new decorations (abracadabra! ✨)
    if (decorationStyle && decorationStyle !== 'none') {
        decorationElements.forEach(element => {
            element.classList.add(`decoration-${decorationStyle}`);
            switch(decorationStyle) {
                case 'stars':
                    element.textContent = '⭐';
                    break;
                case 'laurel':
                    element.textContent = '🌿';
                    break;
                case 'academic':
                    element.textContent = '📚';
                    break;
                case 'flowers':
                    element.textContent = '🌸';
                    break;
                case 'ribbons':
                    element.textContent = '🎀';
                    break;
                case 'medals':
                    element.textContent = '🏅';
                    break;
                case 'scrolls':
                    element.textContent = '📜';
                    break;
                case 'geometric':
                    element.textContent = '⬡';
                    break;
                case 'confetti':
                    element.textContent = '✨';
                    break;
                case 'achievement':
                    element.textContent = '🏆';
                    break;
            }
        });
    }
}

// Event listeners for style changes
document.getElementById('frameStyle').addEventListener('change', function() {
    const certificate = document.getElementById('certificate');
    certificate.setAttribute('data-frame', this.value);
});

document.getElementById('decorationStyle').addEventListener('change', function() {
    const certificate = document.getElementById('certificate');
    const style = this.value;
    
    // Clear existing decorations
    const decorations = document.querySelectorAll('.decoration-element');
    decorations.forEach(el => el.remove());
    
    if (style === 'none') return;
    
    // Create new decorations
    const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    positions.forEach(pos => {
        const decoration = document.createElement('div');
        decoration.className = `decoration-element ${pos}`;
        
        switch(style) {
            case 'stars': decoration.textContent = '⭐'; break;
            case 'laurel': decoration.textContent = '🌿'; break;
            case 'academic': decoration.textContent = '📚'; break;
            case 'flowers': decoration.textContent = '🌸'; break;
            case 'ribbons': decoration.textContent = '🎀'; break;
            case 'medals': decoration.textContent = '🏅'; break;
            case 'scrolls': decoration.textContent = '📜'; break;
            case 'geometric': decoration.textContent = '⬡'; break;
            case 'confetti': decoration.textContent = '✨'; break;
            case 'achievement': decoration.textContent = '🏆'; break;
        }
        
        certificate.appendChild(decoration);
    });
});

// Color handling
document.getElementById('frameColor').addEventListener('change', function() {
    const certificate = document.getElementById('certificate');
    certificate.style.setProperty('--frame-color', this.value);
    document.getElementById('frameColorPicker').value = this.value;
});

document.getElementById('frameColorPicker').addEventListener('input', function() {
    const certificate = document.getElementById('certificate');
    certificate.style.setProperty('--frame-color', this.value);
});

// Initialize certificate with default styles
function initializeCertificate() {
    const certificate = document.getElementById('certificate');
    
    // Set default frame style
    certificate.setAttribute('data-frame', 'classic');
    document.getElementById('frameStyle').value = 'classic';
    
    // Set default color
    certificate.style.setProperty('--frame-color', '#091f2f');
    document.getElementById('frameColor').value = '#091f2f';
    document.getElementById('frameColorPicker').value = '#091f2f';
    
    // Create default decoration elements
    const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    positions.forEach(pos => {
        const decoration = document.createElement('div');
        decoration.className = `decoration-element ${pos}`;
        certificate.appendChild(decoration);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCertificate);

// 🚀 Initialize everything (let the show begin!)
function initializeCertificateOld() {
    const certificate = document.getElementById('certificate');
    
    // Set default styles
    certificate.setAttribute('data-frame', 'classic');
    certificate.setAttribute('data-decoration', 'none');
    certificate.style.setProperty('--frame-color', '#091f2f');
    
    // Update the UI
    document.getElementById('frameStyle').value = 'classic';
    document.getElementById('decorationStyle').value = 'none';
    document.getElementById('frameColor').value = '#091f2f';
    document.getElementById('frameColorPicker').value = '#091f2f';
    
    // Apply the styles
    updateCertificate();
    updateDecorations();
}

// 🎭 Start the show when everything is loaded!
// document.addEventListener('DOMContentLoaded', initializeCertificateOld);

// 📸 The Grand Finale - Turn your masterpiece into a PDF
async function generatePDF() {
    // Time to turn our beautiful creation into a PDF masterpiece!
    // Warning: Contains 100% digital magic ✨
    const certificate = document.getElementById('certificate');
    
    try {
        // First, we make a clone (like a certificate twin!)
        const certificateClone = certificate.cloneNode(true);
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';  // Hide it in the digital realm
        tempContainer.style.top = '0';
        tempContainer.appendChild(certificateClone);
        document.body.appendChild(tempContainer);

        // Make it picture perfect (say cheese! 📸)
        certificateClone.style.width = '800px';
        certificateClone.style.height = '600px';
        certificateClone.style.margin = '0';
        certificateClone.style.backgroundColor = 'white';
        certificateClone.style.transform = 'none';

        // Create a beautiful canvas (like a digital painting 🎨)
        const canvas = await html2canvas(certificateClone, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            width: 800,
            height: 600,
            windowWidth: 800,
            windowHeight: 600,
            onclone: function(clonedDoc) {
                const clonedCert = clonedDoc.getElementById('certificate');
                clonedCert.style.transform = 'none';
            }
        });

        // Clean up our mess (we're tidy wizards 🧙‍♂️)
        document.body.removeChild(tempContainer);

        // Create the PDF (the moment of truth! 🎉)
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [800, 600]
        });

        // Center it perfectly (because alignment matters ⚖️)
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const x = (pdfWidth - 800) / 2;
        const y = (pdfHeight - 600) / 2;

        // Add the image (the final touch ✨)
        pdf.addImage(
            canvas.toDataURL('image/jpeg', 1.0),
            'JPEG',
            x,
            y,
            800,
            600
        );

        // Save it (your certificate is ready to conquer the world! 🌍)
        pdf.save('certificate.pdf');

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Oops! Our certificate magic hiccuped. Please try again! 🪄');
    }
}
