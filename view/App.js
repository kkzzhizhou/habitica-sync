import * as React from "react";
import { tasks } from "./habiticaAPI";
const username = "ebbdcbab-e0dc-404b-aa50-9824f0678adf";
const credentials = "bed67d72-63cc-479c-88d3-8845569b04f8";
class App extends React.Component {
    constructor(props) {
        super(props);
        const data = tasks(username, credentials);
        console.log(data);
    }
    render() {
        return (React.createElement("h2", null, "Hello"));
    }
}
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXJDLE1BQU0sUUFBUSxHQUFHLHNDQUFzQyxDQUFBO0FBQ3ZELE1BQU0sV0FBVyxHQUFHLHNDQUFzQyxDQUFBO0FBRTFELE1BQU0sR0FBSSxTQUFRLEtBQUssQ0FBQyxTQUFTO0lBQzdCLFlBQVksS0FBVTtRQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDWixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELE1BQU07UUFBRyxPQUFNLENBQ1gsd0NBQWMsQ0FDakIsQ0FBQTtJQUNELENBQUM7Q0FDSjtBQUNELGVBQWUsR0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vaGFiaXRpY2FBUElcIlxyXG5cclxuY29uc3QgdXNlcm5hbWUgPSBcImViYmRjYmFiLWUwZGMtNDA0Yi1hYTUwLTk4MjRmMDY3OGFkZlwiXHJcbmNvbnN0IGNyZWRlbnRpYWxzID0gXCJiZWQ2N2Q3Mi02M2NjLTQ3OWMtODhkMy04ODQ1NTY5YjA0ZjhcIlxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBjb25zdCBkYXRhID0gdGFza3ModXNlcm5hbWUsIGNyZWRlbnRpYWxzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7cmV0dXJuKFxyXG4gICAgICAgIDxoMj5IZWxsbzwvaDI+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl19