function search(event) {
    event.preventDefault();
    const input = event.target.q.value.trim();
    if (input.startsWith('http://') || input.startsWith('https://')) {
      window.open(input, '_blank');
    } else {
      const url = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
      window.open(url, '_blank');
    }
  }
