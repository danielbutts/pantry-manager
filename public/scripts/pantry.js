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

$('.pantry-item .remove').on('click', () => {
  const $id = $(event.target).data('id');
  $.ajax({
    method: 'DELETE',
    url: `/items/${$id}`,
  })
  $(event.target).closest('.pantry-item').remove();
})
