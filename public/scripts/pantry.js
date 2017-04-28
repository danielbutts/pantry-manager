const deleteItem = () => {
  const $id = $(event.target).data('id');
  $.ajax({
    method: 'DELETE',
    url: `/items/${$id}`,
  })
  $(event.target).closest('.pantry-item').remove();
}

const addItem = (e) => {
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
}

$('#add-pantry-item').click(addItem);

$('#item-name').keypress((e) => {
  if (e.which == 13) {
    $('#add-pantry-item').click();
  }
});


$('.pantry-item .remove').on('click', deleteItem)
