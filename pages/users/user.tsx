import Link from 'next/link';

const user = (
    <div className="card" style={{width: 300}}>
        <div className="card-body">
            <h1 className="card-title">
                Timothy Jones
            </h1>
            <h6 className="card-subtitle mb-2 text-muted">
                <Link href="/">Beware</Link>
            </h6>
        </div>
    </div>
)

const FirstUser = () => {
    return user;
}

export default FirstUser;
