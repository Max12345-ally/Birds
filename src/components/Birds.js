const Birds = ({ birds }) => {
    return (
        <>
        {birds.map((bird) => (
            <h2 key={bird}>{bird.name} {bird.genus} </h2>
        ))}
        </>
    )
}
export default Birds;