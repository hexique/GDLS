async function load_data() {
  try {
    const response = await fetch('data/data 0.json');
    if (!response.ok) throw new Error('Error');
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
}