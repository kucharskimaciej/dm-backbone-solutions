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

export default JST;