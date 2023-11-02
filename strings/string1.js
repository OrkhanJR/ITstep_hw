const titles = [
    "Заголовок 1",
    "Очень длинный заголовок во всей книжке",
    "Заголовок 2", "32"
  ];
  const pages = [10, 20, 123456789012345, 1234];
  
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const page = pages[i].toString();
  
    const totalLength = title.length + page.length;
  
    if (totalLength >= 20) {
      console.log(`${title}.${page}`);
    } else {
      const dots = ".".repeat(20 - totalLength);
      console.log(`${title}${dots}${page}`);
    }
  }