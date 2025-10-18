// Coding Project 01

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const feedbackDisplay = document.getElementById('feedback-display');
  const charCount = document.getElementById('char-count');
  const comments = document.getElementById('comments');
  const container = document.getElementById('container');

// Comment Character Count
  comments.addEventListener('input', () => {
    charCount.textContent = `${comments.value.length} / 200`;
  });

  form.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      const tooltip = e.target.nextElementSibling;
      if (tooltip && tooltip.classList.contains('tooltip')) {
        tooltip.style.display = 'inline';
      }
    }
  });

  form.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      const tooltip = e.target.nextElementSibling;
      if (tooltip && tooltip.classList.contains('tooltip')) {
        tooltip.style.display = 'none';
      }
    }
  });

  // Prevent Empty Submissions
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = comments.value.trim();

    if (!name || !email || !comment) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const entry = document.createElement('div');
    entry.classList.add('feedback-entry');
    entry.innerHTML = `
      <strong>${name}</strong> <span style="color:#999;">(${email})</span><br>
      <p>${comment}</p>
    `;
    feedbackDisplay.appendChild(entry);

    form.reset();
    charCount.textContent = '0 / 200';
  });

  form.addEventListener('focusin', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      e.target.style.borderColor = '#66b2ff';
    }
  });

  form.addEventListener('focusout', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      e.target.style.borderColor = '#444857';
    }
  });

  // Prevent Background Clicks
  container.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.body.addEventListener('click', () => {
    console.log('Background clicked — form events are isolated.');
  });
});