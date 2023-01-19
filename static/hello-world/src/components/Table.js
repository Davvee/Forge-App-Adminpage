import api, { route } from "@forge/api";
import ForgeUI, { useState } from "@forge/ui";


const fetchLastUpdatedProjects = async () => {
  const response = await api
    .asUser()
    .requestJira(route`rest/api/latest/project/search?expand=insight`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  const data = await response.json();
  return data.values;
};

export default function Table() {
  
  const [lastUpdatedProjects] = useState(async () => await fetchLastUpdatedProjects());
  
  return (
    <table>
      <tr>
        <th>Project Name</th>
        <th>Project ID</th>
        <th>Last updated issue</th>
      </tr>
      {lastUpdatedProjects.map(lastUpdatedProject => (
        <tr>
          <td>lastUpdatedProject.name</td>
          <td>lastUpdatedProject.id</td>
          <td>lastUpdatedProject.insight.lastIssueUpdateTime</td>
        </tr>
      ))}
    </table>
  );
}