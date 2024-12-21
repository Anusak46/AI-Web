// Toggle chip selection
document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('active');
    });
});

// Hotel quality rating
const ratingStars = document.querySelectorAll('.rating span');
ratingStars.forEach((star, index) => {
    star.addEventListener('click', () => {
        ratingStars.forEach((s, i) => {
            s.classList.toggle('inactive', i > index);
        });
    });
});


document.querySelector('#generate-ayutthaya').addEventListener('click', () => {
    const days = document.getElementById('days').value;
    const startLocation = document.getElementById('start-location').value;

    const selectedLifestyles = Array.from(document.querySelectorAll('.chip.active')).map(chip => chip.textContent);
    const selectedVehicles = Array.from(document.querySelectorAll('#vehicle input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const hotelQuality = document.querySelectorAll('#hotel-quality span:not(.inactive)').length;
    const foodInclusion = document.querySelector('input[name="food"]:checked')?.value || 'Not specified';

    const travelData = {
        days: days,
        startLocation: startLocation,
        lifestyles: selectedLifestyles,
        vehicles: selectedVehicles,
        hotelQuality: hotelQuality,
        foodInclusion: foodInclusion,
        destination: 'Ayutthaya',
    };

    console.log('Travel Data:', travelData);
});

document.querySelector('#generate-suphanburi').addEventListener('click', () => {
    const days = document.getElementById('days').value;
    const startLocation = document.getElementById('start-location').value;

    const selectedLifestyles = Array.from(document.querySelectorAll('.chip.active')).map(chip => chip.textContent);
    const selectedVehicles = Array.from(document.querySelectorAll('#vehicle input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const hotelQuality = document.querySelectorAll('#hotel-quality span:not(.inactive)').length;
    const foodInclusion = document.querySelector('input[name="food"]:checked')?.value || 'Not specified';

    const travelData = {
        days: days,
        startLocation: startLocation,
        lifestyles: selectedLifestyles,
        vehicles: selectedVehicles,
        hotelQuality: hotelQuality,
        foodInclusion: foodInclusion,
        destination: 'Suphan Buri',
    };

    console.log('Travel Data:', travelData);
});

document.querySelector('#generate-samutsongKhram').addEventListener('click', () => {
    const days = document.getElementById('days').value;
    const startLocation = document.getElementById('start-location').value;

    const selectedLifestyles = Array.from(document.querySelectorAll('.chip.active')).map(chip => chip.textContent);
    const selectedVehicles = Array.from(document.querySelectorAll('#vehicle input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const hotelQuality = document.querySelectorAll('#hotel-quality span:not(.inactive)').length;
    const foodInclusion = document.querySelector('input[name="food"]:checked')?.value || 'Not specified';

    const travelData = {
        days: days,
        startLocation: startLocation,
        lifestyles: selectedLifestyles,
        vehicles: selectedVehicles,
        hotelQuality: hotelQuality,
        foodInclusion: foodInclusion,
        destination: 'Samut SongKhram',
    };

    console.log('Travel Data:', travelData);
});

document.querySelector('#generate-NakhonPathom').addEventListener('click', () => {
    const days = document.getElementById('days').value;
    const startLocation = document.getElementById('start-location').value;

    const selectedLifestyles = Array.from(document.querySelectorAll('.chip.active')).map(chip => chip.textContent);
    const selectedVehicles = Array.from(document.querySelectorAll('#vehicle input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const hotelQuality = document.querySelectorAll('#hotel-quality span:not(.inactive)').length;
    const foodInclusion = document.querySelector('input[name="food"]:checked')?.value || 'Not specified';

    const travelData = {
        days: days,
        startLocation: startLocation,
        lifestyles: selectedLifestyles,
        vehicles: selectedVehicles,
        hotelQuality: hotelQuality,
        foodInclusion: foodInclusion,
        destination: 'NakhonPathom',
    };

    console.log('Travel Data:', travelData);
});

document.querySelector('#generate-LopBuri').addEventListener('click', () => {
    const days = document.getElementById('days').value;
    const startLocation = document.getElementById('start-location').value;

    const selectedLifestyles = Array.from(document.querySelectorAll('.chip.active')).map(chip => chip.textContent);
    const selectedVehicles = Array.from(document.querySelectorAll('#vehicle input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const hotelQuality = document.querySelectorAll('#hotel-quality span:not(.inactive)').length;
    const foodInclusion = document.querySelector('input[name="food"]:checked')?.value || 'Not specified';

    const travelData = {
        days: days,
        startLocation: startLocation,
        lifestyles: selectedLifestyles,
        vehicles: selectedVehicles,
        hotelQuality: hotelQuality,
        foodInclusion: foodInclusion,
        destination: 'Lop Buri',
    };

    console.log('Travel Data:', travelData);
});

document.querySelector('#generate-all-province').addEventListener('click', () => {
    const provinces = ['Ayutthaya', 'Suphan Buri', 'Samut SongKhram', 'Nakhon Pathom', 'Lop Buri'];

    const days = document.getElementById('days').value;
    const startLocation = document.getElementById('start-location').value;

    const selectedLifestyles = Array.from(document.querySelectorAll('.chip.active')).map(chip => chip.textContent);
    const selectedVehicles = Array.from(document.querySelectorAll('#vehicle input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const hotelQuality = document.querySelectorAll('#hotel-quality span:not(.inactive)').length;
    const foodInclusion = document.querySelector('input[name="food"]:checked')?.value || 'Not specified';

    const travelData = {
        days: days,
        startLocation: startLocation,
        lifestyles: selectedLifestyles,
        vehicles: selectedVehicles,
        hotelQuality: hotelQuality,
        foodInclusion: foodInclusion,
        destination: provinces,
    };

    console.log('Travel Data:', travelData);
});


