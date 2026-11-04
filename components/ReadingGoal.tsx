export default function ReadingGoal() {
    return (
        <div className="bg-bg-primary w-fit">
            <div>
                <h3>Reading Goal</h3>
                <div>
                    <span></span> Books <span>{new Date().getFullYear()}</span>
                    <div>Progress Bar</div>
                    <div>
                        <span>reading goal percentage</span>
                        <span>books to go</span>
                    </div>
                </div>
            </div>
        </div>
    )
}