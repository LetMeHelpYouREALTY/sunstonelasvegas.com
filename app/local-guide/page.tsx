import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { DRIVES, LENNAR, SUNSTONE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { CONTACT_PHONE_LINK } from '@/lib/site'
import { buildArticle, buildBreadcrumbList } from '@/lib/structured-data'

const GUIDE =
  'https://www.homes.com/local-guide/las-vegas-nv/sunstone-neighborhood/'

export const metadata = pageMeta({
  title: 'Sunstone Local Guide | Las Vegas',
  description:
    'Sunstone local guide for Las Vegas 89143. Parks, school names, and drive notes from Homes.com, retrieved October 13, 2026.',
  path: '/local-guide',
})

export default function LocalGuidePage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-guide-article"
        data={buildArticle({
          headline: 'Sunstone neighborhood guide, read October 13, 2026',
          description:
            'What the Homes.com Sunstone guide says about parks, school names, price bands, and drive times in Las Vegas 89143, checked against builder and association pages.',
          path: '/local-guide',
          datePublished: '2026-10-13',
        })}
      />
      <JsonLd
        id="schema-guide-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Local guide', path: '/local-guide' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>Homes.com neighborhood guide</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Sunstone neighborhood guide
        </h1>
        <LogoLine />
        <Answer>
          Homes.com titles this page Sunstone, a neighborhood in Las Vegas. It
          lists Clark County ZIPs 89143 and 89166. It names Trilogy as 55+ and
          builders from Lennar to Woodside. The page does not show a publish
          date. This summary was read on October 13, 2026.
        </Answer>
        <SourceLine href={GUIDE}>
          Homes.com Sunstone guide, retrieved October 13, 2026
        </SourceLine>
        <AgentCredit checked="October 13, 2026" />
      </header>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">Figures with no date</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide prints an average value of $561,604 and $269 per square
          foot. It also prints a count of 105 homes for sale. The page does not
          date those three figures. They are not a closed-sale median for this
          site.
        </p>
      </section>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">What the guide calls the plan</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide calls Sunstone one of Las Vegas’s newer master plans. It
          names a Trilogy 55+ subdivision and other single-family homes. It
          names builders from Lennar to Woodside Homes. It says residents are
          minutes from a Smith’s store and from Skye Canyon restaurants.
        </p>
        <p className="text-muted-foreground">
          The guide says the plan is for over 3,000 homes. The master-plan site
          says the plan holds about 3,650 homes. Both of those lines were read
          in October 2026. Those two home counts do not match each other.
        </p>
        <SourceLine href={SUNSTONE}>
          sunstonelv.com, retrieved October 12, 2026
        </SourceLine>
      </section>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">Home types on the guide</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide says the homes use Spanish Revival or Pueblo-inspired
          designs. It mentions clay shingle roofs and some asymmetrical roofs.
          That description is the guide’s wording, not a builder plan sheet.
        </p>
        <p className="text-muted-foreground">
          Robin Smith of Keller Williams is quoted on the page. She says
          construction has run for three to four years. She says Woodside built
          large single-story homes and two-story homes. She says some areas are
          all single-story, outside the 55+ subdivision. The guide does not date
          any of those quotes.
        </p>
      </section>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">Price bands and HOA notes</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide says detached homes run from the lower $400,000s to the
          upper $700,000s. It says condos and duplexes stay in the lower
          $400,000s. The guide page does not date that price range. Woodside’s
          Capella list on October 12, 2026 ran from $599,950 to $679,950.
        </p>
        <p className="text-sm">
          <Link href="/move-in-ready">
            The six Capella homes Woodside listed
          </Link>
          <span aria-hidden="true"> · </span>
          <Link href="/communities">
            Sunstone neighborhoods and price bands
          </Link>
        </p>
        <p className="text-muted-foreground">
          The guide says every property sits in an HOA. It says those HOA fees
          vary by subdivision. It says some subdivisions add dues on top of a
          master fee. It does not print a dollar amount for those fees.
        </p>
        <div>
          <Link className="btn" href="/market-report">
            Open the dated market notes
          </Link>
        </div>
      </section>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">School names, not ratings</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide names James Bilbray Elementary, printed there with a middle
          initial. It also names William and Mary Scherkenbach Elementary. It
          says some homes sit across the street from those campuses. That line
          is not an assignment for every address. Lennar already says its school
          names need a district check.
        </p>
        <p className="text-muted-foreground">
          The guide says Nevada offers open enrollment for students. It does not
          print the current district rule. A schools module sits lower on the
          page. This site does not republish a school rating.
        </p>
        <SourceLine href={LENNAR}>
          Lennar Axel page, retrieved October 12, 2026
        </SourceLine>
      </section>

      <section className="grid max-w-3xl gap-4">
        <h2 className="font-heading text-4xl">Parks and trails</h2>
        <AgentCredit />
        <div>
          <h3 className="font-heading text-2xl">Sun Trails Park</h3>
          <p className="mt-2 text-muted-foreground">
            The guide says the wider community can use Sun Trails Park. It lists
            a paved path, a playground, and a pump track. It does not print
            hours or an acreage.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl">Alyn Beck Memorial Park</h3>
          <p className="mt-2 text-muted-foreground">
            The guide says Alyn Beck Memorial Park borders the elementary
            schools. It lists multipurpose fields, a splash pad, and a
            basketball court. Earlier Sunstone pages on this site did not name
            that park.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl">Sun Mountain Park</h3>
          <p className="mt-2 text-muted-foreground">
            The guide lists Sun Mountain Park with an interactive sundial and
            trail access. Lennar’s Axel page describes that same interactive
            sundial. Neither of those pages prints a park acreage.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl">Nature Paseo</h3>
          <p className="mt-2 text-muted-foreground">
            The guide describes the Nature Paseo as a dino dig area and fitness
            stations. It does not say which segment holds the dig. It does not
            print a width for that path.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl">
            Mountain bike trail and Moccasin
          </h3>
          <p className="mt-2 text-muted-foreground">
            The guide says the Sunstone mountain bike trail circles the Moccasin
            Walking Trail. It does not print a trail length or a surface type.
            The guide treats Paiute’s three courses as a drive away. It does not
            call them an on-site Sunstone course.
          </p>
        </div>
      </section>

      <section className="grid max-w-3xl gap-4">
        <h2 className="font-heading text-4xl">Stores and restaurants</h2>
        <AgentCredit />
        <div>
          <h3 className="font-heading text-2xl">Skye Canyon Marketplace</h3>
          <p className="mt-2 text-muted-foreground">
            The guide quotes Robin Smith on a Smith’s store at Skye Canyon. It
            names Skye Bar and Grill as open from breakfast through dinner. It
            also names Sicilian Guys Trattoria and Sakura Ya. It does not print
            a menu price or a distance in miles.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl">Cabochon Club dining</h3>
          <p className="mt-2 text-muted-foreground">
            The guide places Kindred and Main, a coffeehouse, inside the
            Cabochon Club. It also names Cooper’s Kitchen and Tap for
            reservations. Shea’s own page lists a coffeehouse and a culinary
            studio. The guide’s restaurant names go beyond that list.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/trilogy">
              What Shea says the Cabochon Club includes
            </Link>
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl">Lowe’s and Target</h3>
          <p className="mt-2 text-muted-foreground">
            The guide says Lowe’s and Target are about a 10-minute drive. It
            does not name a street address for either store. It does not date
            that 10-minute drive claim.
          </p>
        </div>
      </section>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">Drive times that disagree</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide says downtown is about 20 minutes on US-95. It says the
          airport is closer to 30 minutes. It says Centennial Hills Hospital is
          under 10 minutes. It says Nellis Air Force Base is roughly 30 minutes
          away.
        </p>
        <p className="text-muted-foreground">
          Off-peak routing on September 30, 2026 put downtown near 23 minutes.
          That same note put the airport near 49 minutes. Centennial Hills
          Hospital was about 7 minutes away. The two airport figures do not
          match each other. Use the measured note when the two pages disagree.
        </p>
        <SourceLine href={DRIVES}>
          Drive times measured September 30, 2026
        </SourceLine>
        <div>
          <Link className="btn" href="/market-report">
            Read the measured drive times
          </Link>
        </div>
      </section>

      <section className="grid max-w-3xl gap-3">
        <h2 className="font-heading text-4xl">Ask Dr. Jan Duffy</h2>
        <AgentCredit />
        <p className="text-muted-foreground">
          The guide lists other agents and undated sale counts. This site does
          not republish that agent roster. Call the site number when you want a
          Capella or Sunstone tour.
        </p>
        <div>
          <a className="btn" href={CONTACT_PHONE_LINK}>
            Call Dr. Jan Duffy
          </a>
        </div>
      </section>
    </article>
  )
}
