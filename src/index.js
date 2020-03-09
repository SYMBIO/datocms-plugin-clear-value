window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const button = document.createElement('button');
  button.classList.add('DatoCMS-button');
  button.classList.add('DatoCMS-button--small');
  button.textContent = plugin.locale === 'cs' ? 'Vymazat hodnotu pole' : 'Clear this field\'s value';

  button.addEventListener('click', () => {
    plugin.setFieldValue(plugin.fieldPath, null);
  });

  document.body.appendChild(button);
});
