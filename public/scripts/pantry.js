const domVars = { query: [] };

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

const addToQuery = () => {
  const $item = $(event.target);
  const query = domVars.query;

  if (!$item.hasClass('queried')) {
    $item.addClass('queried');
    query.push($item.data('name'));
    console.log(query);
  } else {
    const itemIndex = query.indexOf($item.data('name'))
    $item.removeClass('queried');
    query.splice(itemIndex, 1);
    console.log(query);
  }
}

$('#add-pantry-item').click(addItem);

$('#item-name').keypress((e) => {
  if (e.which == 13) {
    $('#add-pantry-item').click();
  }
});

$('.pantry-item .remove').on('click', deleteItem);
$('.pantry-item').on('click', addToQuery);
