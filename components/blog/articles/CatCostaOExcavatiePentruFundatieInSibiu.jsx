import Link from "next/link";
import contentStyles from "@/styles/ContentPage.module.css";
import styles from "@/styles/Article.module.css";

const FAQS = [
    {
        q: "Cât durează o excavație pentru fundația unei case?",
        a: "Depinde de suprafață și tipul solului, dar pentru o casă obișnuită durează de obicei între 1 și 3 zile de lucru cu utilaj.",
    },
    {
        q: "Ce se întâmplă cu pământul excavat?",
        a: "O parte poate fi refolosită pe teren pentru nivelări sau umpluturi, iar restul este transportat cu autobasculanta la un loc de depozitare stabilit împreună cu clientul.",
    },
    {
        q: "Pot obține o estimare fără o vizită pe teren?",
        a: "O estimare orientativă e posibilă pe baza dimensiunilor transmise telefonic, dar prețul final se stabilește după ce vedem terenul, din cauza variațiilor de sol și acces.",
    },
];

export { FAQS };

export default function CatCostaOExcavatiePentruFundatieInSibiu() {
    return (
        <div className={styles.prose}>
            <p>
                Dacă plănuiești o construcție în Sibiu sau împrejurimi, una dintre primele întrebări este cât te
                costă excavația pentru fundație. Răspunsul scurt: nu există un preț fix, valabil pentru orice
                teren — costul depinde de câțiva factori concreți, pe care îi explicăm mai jos, alături de
                prețurile orientative întâlnite pe piață în acest moment.
            </p>

            <h2>Ce factori influențează prețul unei excavații pentru fundație</h2>
            <p>
                Doi metri cubi de pământ nu costă la fel pe orice teren. Prețul final pentru o lucrare de
                excavații se stabilește de obicei după o vizită la fața locului, pentru că depinde de:
            </p>

            <div className={contentStyles.grid} style={{"--grid-cols": 2}}>
                <div className={contentStyles.card}>
                    <h3 className={contentStyles.cardTitle}>Volumul de pământ excavat</h3>
                    <p>
                        Cu cât suprafața și adâncimea fundației sunt mai mari, cu atât volumul total de
                        pământ excavat crește — dar costul pe metru cub scade, de regulă, la volume mai mari.
                    </p>
                </div>
                <div className={contentStyles.card}>
                    <h3 className={contentStyles.cardTitle}>Tipul solului</h3>
                    <p>
                        Solul argilos, compact, este mai greu și mai lent de excavat decât nisipul sau
                        pământul afânat. Roca aflată la adâncime mică poate crește semnificativ costul pentru
                        acea porțiune din săpătură.
                    </p>
                </div>
                <div className={contentStyles.card}>
                    <h3 className={contentStyles.cardTitle}>Adâncimea săpăturii</h3>
                    <p>
                        O fundație la -0,8 m se sapă mult mai rapid decât una la -2,5 m sau mai adânc.
                        Adâncimile mari cresc și riscul de surpare a pereților săpăturii, ceea ce poate
                        necesita sprijiniri suplimentare.
                    </p>
                </div>
                <div className={contentStyles.card}>
                    <h3 className={contentStyles.cardTitle}>Accesul pe teren și transportul pământului</h3>
                    <p>
                        Un teren ușor accesibil pentru utilaje reduce timpul de lucru. Pământul excavat care
                        nu rămâne pe loc trebuie transportat cu autobasculanta, iar costul de transport
                        depinde de distanța până la locul de depozitare.
                    </p>
                </div>
            </div>

            <h2>Adâncimea de îngheț în Sibiu — de ce contează pentru cost</h2>
            <p>
                Adâncimea fundației nu e o alegere la întâmplare — trebuie să respecte adâncimea de îngheț
                din zonă, conform STAS 6054-77, altfel fundația riscă degradări din cauza umflării solului la
                înghețarea apei din pământ pe timpul iernii.
            </p>
            <div className={styles.calloutBox}>
                <p>
                    Sibiu se află în <strong>zona climatică II</strong>, cu o adâncime de îngheț de aproximativ{" "}
                    <strong>90–100 cm</strong>. Conform standardului, adâncimea minimă de fundare trebuie să
                    fie adâncimea de îngheț plus o marjă de 20 cm — ceea ce înseamnă, în practică, o fundație
                    de cel puțin <strong>110–120 cm</strong> pentru majoritatea terenurilor din zonă.
                </p>
            </div>
            <p>
                Cu cât adâncimea necesară este mai mare, cu atât volumul de excavat — și implicit costul —
                cresc. De aceea recomandăm mereu o evaluare pe teren înainte de a stabili un preț final.
            </p>

            <h2>Prețuri orientative pe piață (2026)</h2>
            <p className={styles.disclaimer}>
                Cifrele de mai jos sunt orientative, la nivelul pieței din România, și pot varia de la un
                antreprenor la altul. Nu reprezintă un preț fix oferit de HCN Construct — pentru o sumă
                exactă, contactează-ne cu detaliile terenului tău.
            </p>
            <ul>
                <li>Excavare fundație (manoperă + utilaj): aproximativ <strong>25–60 lei/mc</strong>, în funcție de dificultate.</li>
                <li>Transport pământ cu autobasculanta: <strong>15–30 lei/mc</strong> în plus, în funcție de distanță.</li>
                <li>Închiriere miniexcavator în Sibiu: în general <strong>700–1.500+ lei/zi</strong> sau <strong>150–200 lei/oră</strong>, în funcție de capacitatea utilajului.</li>
            </ul>
            <p>
                Ca reper: o fundație care necesită excavarea a 150 mc de pământ poate ajunge la aproximativ{" "}
                <strong>6.000–12.000 lei</strong> pentru excavare și transport, în funcție de condițiile
                concrete ale terenului.
            </p>

            <h2>Cum poți reduce costul excavației</h2>
            <ul>
                <li>Programează lucrarea când terenul este uscat și ușor accesibil — solul umed sau înghețat încetinește excavarea.</li>
                <li>Asigură-te că utilajul poate ajunge fără obstacole până în punctul de lucru; accesul dificil adaugă timp și cost.</li>
                <li>Dacă ai mai multe lucrări de făcut pe același teren — excavații, rețele de apă-canal, terasamente — grupează-le într-o singură vizită a utilajelor.</li>
                <li>Cere o evaluare la fața locului înainte de a începe, ca să eviți costuri suplimentare neprevăzute.</li>
            </ul>

            <h2>Întrebări frecvente</h2>
            {FAQS.map((item) => (
                <div key={item.q} className={contentStyles.faqItem}>
                    <h3 className={contentStyles.faqQuestion}>{item.q}</h3>
                    <p className={contentStyles.faqAnswer}>{item.a}</p>
                </div>
            ))}

            <h2>De ce să alegi HCN Construct</h2>
            <p>
                Suntem o echipă din Vestem, Sibiu, cu flotă proprie de peste 12 utilaje — excavatoare Hitachi,
                Kubota și Terex, autobasculante MAN și Mercedes — bine întreținute și pregătite pentru lucrări
                de excavații, demolări și terasamente, atât pentru clienți industriali, cât și rezidențiali.
                Îți oferim o estimare gratuită după ce vedem terenul, ca să știi exact la ce cost te aștepți.
            </p>
            <p className={contentStyles.cta}>
                <Link href="/contact" className={contentStyles.ctaButton}>Cere o ofertă personalizată →</Link>
            </p>
        </div>
    );
}
