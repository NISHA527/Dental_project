// Make sure your script.js has the correct IDs matching the form
document.getElementById('consultForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const captcha = document.getElementById('captcha').value.trim();

  if (!name || !mobile || captcha !== '1514') {
    alert('Please fill all fields correctly.');
    return;
  }

  alert('Consultation booked successfully!');
  this.reset();
});