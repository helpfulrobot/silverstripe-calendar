<div id="$ViewBarID" class="calendarViewBar">
	<ul>
		<% loop Views %>
			<li<% if Current %> class="current"<% end_if %>><% if Current %><span>$Title</span><% else %><a href="$Link">$Title</a><% end_if %></li>
		<% end_loop %>
	</ul>
</div>