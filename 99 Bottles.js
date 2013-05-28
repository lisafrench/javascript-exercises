<html>
	<header>
		<script>

			function out(x){
			document.write(x);
			}

			for(i=99;i>0;i--){
			out(i);
			out(' bottle');
			out((i!=1)?'s':'');
			out(' of beer on the wall, ');
			out(i);
			out(' bottle');
			out((i!=1)?'s':'');
			out(' of beer. Take one down and pass it around, ');
			out((i-1!=0)?i-1:'no more');
			out(' bottle');
			out((i-1!=1)?'s':'');
			out(' of beer on the wall.');
			};
			out('No more bottles of beer on the wall, no more bottles of beer. Blah Blah Blah Blah Blah Blah no more bottles of beer on the wall');

</script>
</header>
</html>