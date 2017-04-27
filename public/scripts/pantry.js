console.log('sanity check');
$('#add-pantry-item').click((e) => {
  e.preventDefault();
  const $item = $('#item-name').val();
  const $pantryId = $('input.pantry-id').val();
  $.ajax({
    method: 'POST',
    url: '/items',
    data: { name: $item, pantryId: $pantryId },
  })
  .done(() => {
    window.location.replace(`/users/${$pantryId}/pantries/${$pantryId}`);
  })
});
