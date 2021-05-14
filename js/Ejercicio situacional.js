const barNav = document.querySelector("#barNav");
const nav = `
<ul class="nav">
	<li><a href="">Usuario</a>
		<ul>
            <li> <a href="index.html">Log in</a> </li>
		</ul>
	</li>
</ul>
`;

barNav.innerHTML = nav;