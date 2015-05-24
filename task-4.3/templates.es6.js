var JST = {};

JST['form'] = _.template(`
<h2>New user</h2>
<form id="newSong">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" class="form-control" />
  </div>
  <h3>Address: </h3>
  <div class="form-group">
    <label for="city">City</label>
    <input type="text" name="city" id="city" class="form-control" />
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <input type="text" name="address" id="address" class="form-control" />
  </div>
  <div class="form-group">
    <label for="zip">Zip code</label>
    <input type="text" name="zip" id="zip" class="form-control" />
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
`);

JST['cart'] = _.template(`
<div class="row">
    <h2 class="col-sm-12">
        Shopping cart
    </h2>
</div>
<div class="row">
  <div class="col-sm-12">
    <ul class="list-group" item-container></ul>
  </div>
</div>
`);

JST['cartBook'] = _.template(`
<div class="row">
    <div class="col-sm-2">
        <img src="<%= picture  %>"/>
    </div>
    <div class="col-sm-10">
        <h4 class="list-group-item-heading"><%= title %></h4>
        <aside><strong>Author: </strong><%= author %></aside>
        <strong>Price: </strong> $<%= price %><br/>
        <button class="btn btn-xs btn-danger" action="remove">
            Remove from cart
        </button>
    </div>
</div>
`);

export default JST;