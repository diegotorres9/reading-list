"use client";

import { useState, useEffect } from "react";

export default function ReadingGoal() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    })
    return (
        <div className="bg-bg-primary w-fit">
            <div>
                <h3>Reading Goal</h3>
                <div>
                    <span></span> Books <span>{currentYear}</span>
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