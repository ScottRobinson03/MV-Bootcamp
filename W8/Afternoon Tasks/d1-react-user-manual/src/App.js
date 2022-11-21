import "./App.css";
import "./Style.css";
import { CreateImageSection, CreateListSection } from "./SectionComponents";

function App() {
    const listSections = [
        {
            id: "style",
            items: [
                "Passionate",
                "Logical and concise",
                "Very much still learning and looking to improve knowledge",
            ],
            title: "My Style",
        },
        {
            id: "values",
            items: [
                "Punctuality",
                "Trust and integrity",
                "Feedback on both what I've done well and what I can improve on",
            ],
            title: "What I value",
        },
        {
            id: "patience",
            items: ["Dishonest and discourtesy"],
            title: "What I don't have patience for",
        },
        {
            id: "communication",
            items: [
                "Slack: same as email",
                "Discord: TizzySaurus#9615",
                <span>
                    {/* 
                    we need the below line as js to prevent 
                    the trailing whitespace from being removed
                    */}
                    {"Email: "}
                    <a
                        className="btn btn-link"
                        id="email"
                        href="mailto: scott.robinson2@sky.uk">
                        scott.robinson2@sky.uk
                    </a>
                </span>,
            ],
            title: "How to best communicate with me",
        },
        {
            id: "help",
            items: [
                "Be respectful and kind",
                "Be patient as I sometimes misinterpret what's said",
                "Be clear and concise when communicating (to help prevent misintrepretation)",
            ],
            title: "How to help me",
        },

        {
            id: "misunderstandings",
            items: [
                "I'm a social person, but less so in crowds",
                "It can take time for me to fully process/understand a situation/conversation",
            ],
            title: "What people misunderstand about me",
        },
        {
            id: "personality",
            items: [
                <a
                    className="btn btn-link"
                    href="https://www.16personalities.com/istj-personality"
                    target="_blank"
                    rel="noreferrer">
                    ISTJ-T (Logistician)
                </a>,
            ],
            title: "16 Personalities Type",
        },
    ];

    const images = [
        { name: "python", format: "webp" },
        { name: "piano", format: "jpeg" },
        { name: "travelling", format: "jpg" },
        { name: "hiking", format: "jpeg" },
    ];

    return (
        <div className="App">
            {listSections.map(section => {
                return (
                    <CreateListSection
                        key={section.id}
                        id={section.id}
                        listItems={section.items}
                        title={section.title}
                    />
                );
            })}
            <section id="interests">
                <h2>My Interests</h2>
                <CreateImageSection id="img-grid" images={images} />
            </section>
        </div>
    );
}

export default App;
