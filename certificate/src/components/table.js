import styled from "styled-components";

const Table = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  table {
    margin-bottom: 1rem;
  }
  th {
    text-align: right;
  }
  td {
    text-align: left;
  }
  a {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    background: purple;
    padding: 0.66rem;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    line-height: 25px;
    @media (max-width: 749px) {
      font-size: 0.8rem;
    }
  }
`;

export default function DataTable(props) {
  const link = props.props.url.replace(
    /\/file\/d\/(.+)\/(.+)/,
    "/uc?export=download&id=$1"
  );

  return (
    <Table>
      <table cellSpacing="12">
        <tbody>
          <tr>
            <th>Name: </th>
            <td>{props.props.name}</td>
            <th>Score: </th>
            <td>{props.props.score}</td>
          </tr>
          <tr>
            <th>Roll: </th>
            <td>{props.props.roll}</td>
            <th>Class: </th>
            <td>{props.props.class}</td>
          </tr>
          <tr>
            <th>Exam:</th>
            <td>{props.props.exam}</td>
            <th>Rank: </th>
            <td>{props.props.orank} (Olympiad rank)</td>
          </tr>
          <tr>
            <th>School:</th>
            <td>{props.props.school}</td>
            <th>Rank: </th>
            <td>{props.props.srank} (School rank)</td>
          </tr>
          <tr>
            <th>Awards won:</th>
            <td>{props.props.prize}</td>
          </tr>
        </tbody>
      </table>
      <a href={link}>DOWNLOAD CERTIFICATE</a>
    </Table>
  );
}
