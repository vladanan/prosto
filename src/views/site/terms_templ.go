// Code generated by templ - DO NOT EDIT.

// templ: version: v0.2.747
package site

//lint:file-ignore SA4006 This context is only used if a nested component is present.

import "github.com/a-h/templ"
import templruntime "github.com/a-h/templ/runtime"

import (
	"github.com/vladanan/prosto/src/views"
	"net/http"
)

func Terms(r *http.Request) templ.Component {
	return templruntime.GeneratedTemplate(func(templ_7745c5c3_Input templruntime.GeneratedComponentInput) (templ_7745c5c3_Err error) {
		templ_7745c5c3_W, ctx := templ_7745c5c3_Input.Writer, templ_7745c5c3_Input.Context
		templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templruntime.GetBuffer(templ_7745c5c3_W)
		if !templ_7745c5c3_IsBuffer {
			defer func() {
				templ_7745c5c3_BufErr := templruntime.ReleaseBuffer(templ_7745c5c3_Buffer)
				if templ_7745c5c3_Err == nil {
					templ_7745c5c3_Err = templ_7745c5c3_BufErr
				}
			}()
		}
		ctx = templ.InitializeContext(ctx)
		templ_7745c5c3_Var1 := templ.GetChildren(ctx)
		if templ_7745c5c3_Var1 == nil {
			templ_7745c5c3_Var1 = templ.NopComponent
		}
		ctx = templ.ClearChildren(ctx)
		templ_7745c5c3_Var2 := templruntime.GeneratedTemplate(func(templ_7745c5c3_Input templruntime.GeneratedComponentInput) (templ_7745c5c3_Err error) {
			templ_7745c5c3_W, ctx := templ_7745c5c3_Input.Writer, templ_7745c5c3_Input.Context
			templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templruntime.GetBuffer(templ_7745c5c3_W)
			if !templ_7745c5c3_IsBuffer {
				defer func() {
					templ_7745c5c3_BufErr := templruntime.ReleaseBuffer(templ_7745c5c3_Buffer)
					if templ_7745c5c3_Err == nil {
						templ_7745c5c3_Err = templ_7745c5c3_BufErr
					}
				}()
			}
			ctx = templ.InitializeContext(ctx)
			_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("<div class=\"relative top-4 m-5\"><p class=\"font-bold text-4xl\">Pravila upotrebe sajta</p><br><br><p>Ograđujemo se od mogućih nepriličnih sadržaja koje korisnici sajta unose u formulare za kreiranje novih pitanja uključujući i linkove za tekstove, fotografije i video snimke. Molim da svaki takav sadržaj prijavite na mejl priložen na kontakt strani uz navođenje nekog od prepoznatljivih podataka kao što su broj pitanja, obrazovni profil i predmet, lekcija.</p><p>Korisnici ne bi trebalo da se oslanjaju samo na pitanja i odgovore u pripremi za svoje ispite i testove jer se može desiti da materijali na sajtu ne pokrivaju kompletno ili dovoljno određenu tematiku tako da sajt ne snosi krivicu ako dođe do loših rezultata na testovima i ispitima. Dakle, ovaj sajt je samo pomoćno sredstvo u proveri znanja.</p><p>Postavljanjem svojih sadržaja (pitanja, odgovori, linkovi, testovi, fajlovi itd.) korisnici prihvataju da se odriču svojih autorskih i vlasničkih prava na sadržaje postavljene na sajt kao i da postavljeni sadržaji nisu vlasništvo trećih lica.</p><br><p><b>Pravila korišćenja</b><br><br>Ova Pravila korišćenja regulišu vaš odnos sa https://vezbamo.vercel.app/ i Mega Increment Visual Studio Code extenzijom („Usluga“) kojom upravlja Vladan Anđelković.<br><br>Pažljivo pročitajte ova Pravila korišćenja pre korišćenja ove veb stranice i Mega Increment Visual Studio Code extenzije („Usluga“).<br><br>Vaš pristup i korišćenje usluge uslovljeni su vašim prihvatanjem i poštovanjem ovih Uslova. Ovi Uslovi se primenjuju na sve posetioce, korisnike i druge koji pristupaju ili koriste Uslugu.<br><br>Pristupanjem ili korišćenjem usluge prihvatate da budete obavezani ovim Pravilima. Ako se ne slažete sa bilo kojim delom Pravila korišćenja onda ne možete koristiti Uslugu. Kupovine<br><br>Vladan Anđelković ni u kom slučaju neće biti odgovoran za bilo kakvu indirektnu, slučajnu, posebnu, posledičnu ili kaznenu štetu, uključujući, bez ograničenja, gubitak dobiti, podataka, korišćenja, dobre volje ili druge nematerijalne gubitke, koji su rezultat (i) vašeg pristupa ili korišćenja ili nemogućnost pristupa ili korišćenja usluge; (ii) bilo kakvo ponašanje ili sadržaj trećih lica na Usluzi; (iii) bilo koji sadržaj dobijen od Usluge; i (iv) neovlašćenog pristupa, korišćenja ili izmene vaših sadržaja, bilo na osnovu garancije, ugovora, delikta (uključujući nemar) ili bilo koje druge pravne teorije, bez obzira da li sam ili ne obavešten o mogućnosti takve štete, pa čak i ako se utvrdi da sadržaj koji je ovde izložen nije ispunio svoju suštinsku svrhu.<br><br><b>Odricanje od odgovornosti</b><br><br>Vaše korišćenje Usluge je na sopstveni rizik. Usluga se pruža „KAKVA JESTE“ i „ONAKO KAKO JE DOSTUPNA“. Usluga se pruža bez garancija bilo koje vrste, bilo eksplicitnih ili impliciranih, uključujući, ali ne ograničavajući se na, implicitne garancije za prodaju, prikladnost za određenu svrhu, nekršenje ili tok učinka.<br><br>Vladan Anđelković ne garantuje da će: a) Usluga funkcionisati nesmetano, bezbedno ili biti dostupna u bilo kom određenom trenutku ili lokaciji; b) sve greške ili nedostaci će biti ispravljeni; c) Usluga ne sadrži viruse ili druge štetne komponente; ili d) rezultati korišćenja usluge zadovoljiti vaše zahteve.<br><br>Zadržavam pravo, po sopstvenom nahođenju, da izmenim ili zamenim ova Pravila u bilo kom trenutku.<br><br>Nastavkom pristupa ili korišćenja Usluge nakon što te revizije stupe na snagu, saglasni ste da ćete biti obavezani revidiranim Pravilom. Ako se ne slažete sa novim Pravilom, prestanite da koristite Uslugu.<br><br>Poslednje ažuriranje: 10. februar 2024.</p><br><br><p class=\"font-bold text-4xl\">Terms and Conditions</p><br><br><p>These Terms and Conditions govern your relationship with https://vezbamo.vercel.app/ and Mega Increment Visual Studio Code extension application (the \"Service\") operated by Vladan Anđelković.<br><br>Please read these Terms and Conditions carefully before using this website and Mega Increment Visual Studio Code extension application (the \"Service\").<br><br>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.<br><br>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Purchases<br><br>In no event shall Vladan Anđelković be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.<br><br><b>Disclaimer</b><br><br>Your use of the Service is at your sole risk. The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.<br><br>Vladan Anđelković do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.<br><br>I reserve the right, at my sole discretion, to modify or replace these Terms at any time.<br><br>By continuing to access or use Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.<br><br>Last updated: February 10, 2024</p><br><br><p>Pogledati i <a href=\"/privacy\" class=\"underline\">politiku privatnosti / Privacy Policy</a></p></div><br>")
			if templ_7745c5c3_Err != nil {
				return templ_7745c5c3_Err
			}
			return templ_7745c5c3_Err
		})
		templ_7745c5c3_Err = views.Layout(r).Render(templ.WithChildren(ctx, templ_7745c5c3_Var2), templ_7745c5c3_Buffer)
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		return templ_7745c5c3_Err
	})
}
