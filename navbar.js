function navbar() {
console.log("Building the Navbar");
$("body").prepend(`<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Music Dataset</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="index.html">About the Data</a></li>
      <li><a href="musicdata.html">Music Data</a></li>
      <li><a href="popsongs.html">Popularity of Songs</a></li>
      <li><a href="databysongs.html">Data by Song</a></li>
    </ul>
  </div>
</nav>`);

}