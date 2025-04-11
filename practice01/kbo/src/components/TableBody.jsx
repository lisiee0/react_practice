export function TableBody({ rankings }) {

    return (
        <tbody>
            {rankings.map((team) => (
                <tr key={team.teamName}>
                    <td style={{color : team.isTopFive ? "gold" : "white" } }>{team.rank}</td>
                    <td>{team.teamName}</td>
                    <td>{team.match}</td>
                    <td>{team.win}</td>
                    <td>{team.lose}</td>
                    <td>{team.draw}</td>
                    <td>{team.winningRate}</td>
                    <td>{team.gameBehind}</td>
                </tr>
            ))}
        </tbody>
    );
}