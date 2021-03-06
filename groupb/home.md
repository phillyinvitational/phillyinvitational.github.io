---
title:  Group B
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
{% if true %}
<h1>Group B</h1>
{% assign b1 = site.data.b1 %}
{% assign b2 = site.data.b2 %}
{% assign b3 = site.data.b3 %}
{% assign b4 = site.data.b4 %}

<h2>Standings</h2>
<table class="display">
  <colgroup>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="fiftyfive"/>
          <col class="five"/>
          <col class="five"/>
          <col class="five"/>
      </colgroup>
  <thead>
    <tr>
      <th>Team</th>
      <th>Tag</th>
      <th>Team Members</th>
      <th>Wins</th>
      <th>Loss</th>
      <th>Rds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{b1.teamname}}</td>
      <td>{{b1.tag}}</td>
      <td>{% for member in b1.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b1.grp_win}}</td>
      <td>{{b1.grp_loss}}</td>
      <td>{{b1.grp_g1_rd_w | plus:b1.grp_g2_rd_w | plus:b1.grp_g3_rd_w | minus:b1.grp_g1_rd_l | minus:b1.grp_g2_rd_l | minus:b1.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{b2.teamname}}</td>
      <td>{{b2.tag}}</td>
      <td>{% for member in b2.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b2.grp_win}}</td>
      <td>{{b2.grp_loss}}</td>
      <td>{{b2.grp_g1_rd_w | plus:b2.grp_g2_rd_w | plus:b2.grp_g3_rd_w | minus:b2.grp_g1_rd_l | minus:b2.grp_g2_rd_l | minus:b2.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{b3.teamname}}</td>
      <td>{{b3.tag}}</td>
      <td>{% for member in b3.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b3.grp_win}}</td>
      <td>{{b3.grp_loss}}</td>
      <td>{{b3.grp_g1_rd_w | plus:b3.grp_g2_rd_w | plus:b3.grp_g3_rd_w | minus:b3.grp_g1_rd_l | minus:b3.grp_g2_rd_l | minus:b3.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{b4.teamname}}</td>
      <td>{{b4.tag}}</td>
      <td>{% for member in b4.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b4.grp_win}}</td>
      <td>{{b4.grp_loss}}</td>
      <td>{{b4.grp_g1_rd_w | plus:b4.grp_g2_rd_w | plus:b4.grp_g3_rd_w | minus:b4.grp_g1_rd_l | minus:b4.grp_g2_rd_l | minus:b4.grp_g3_rd_l }}</td>
    </tr>
  </tbody>
</table>

<br>

<h2>Schedule</h2>
<table class="display2">
  <colgroup>
    <col class="thirty"/>
    <col class="twenty"/>
    <col class="ten"/>
    <col class="twenty"/>
    <col class="twenty"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Time</th>
      <th>Map</th>
      <th>Result</th>
      <th>Match Page</th>
    </tr>
  </thead>
  <tbody>
    {% for match_hash in site.data.b_matches %}
    {% assign match = match_hash[1] %}
    <tr>
      <td>{{match.home_team}} vs {{match.away_team}}</td>
      <td>{{match.time}}</td>
      <td>{{match.map}}</td>
      {% if match.complete == "complete" %} 
      <td>{{match.hometag}} {{match.home_rounds}}-{{match.away_rounds}} {{match.awaytag}} </td>
      {% else %}
      <td> Not Played Yet </td>
      {% endif %}
      <td><a href="/groupb/{{match.id}}">Match Stats</a></td>
    </tr>
    {% endfor %}
  </tbody>
 </table>
 {% else %}
 <h3> Group Stages have not started yet! </h3>

 <p> Group Information will be available once all teams have registered. </p>
 <p> To register for the tournament, use our signup page: <a href="/signup">Sign Up</a> </p>
<form>
 <input type="button" value="Go back!" onclick="history.back()">
</form>
 {% endif %}  