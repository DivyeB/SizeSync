document.getElementById('downloadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        length: document.getElementById('length').value,
        shoulder: document.getElementById('shoulder').value,
        waist: document.getElementById('waist').value,
        chest: document.getElementById('chest').value
    };

    try {
        const response = await fetch('/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Size data saved successfully');
            document.getElementById('downloadForm').reset();
        } else {
            alert('Failed to save size data');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while saving size data');
    }
});