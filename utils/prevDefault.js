function prevDefault(e) {
  if (e.code !== "F5") {
    e.preventDefault();
  }
}

export default prevDefault;