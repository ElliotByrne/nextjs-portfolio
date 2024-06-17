import Timeline, { TimelineItem } from "@/components/timeline";
import { TypographyP } from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <TypographyP>
        I create user-focused, high-performing, accessible websites and mobile
        applications. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
        turpis. Suspendisse urna nibh viverra non semper suscipit posuere a
        pede.
      </TypographyP>
      <Timeline>
        <TimelineItem
          title="Companion Group, United Kingdom"
          subtitle="June 2024, Present"
          active
        >
          <TypographyP>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse urna nibh viverra non semper suscipit posuere a pede.
            Suspendisse urna nibh viverra non semper suscipit posuere a pede.
          </TypographyP>
        </TimelineItem>
        <TimelineItem title="Barclays, United Kingdom" subtitle="2021 - 2024">
          <TypographyP>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit.
          </TypographyP>
        </TimelineItem>
        <TimelineItem title="22 Group, United Kingdom" subtitle="2018 - 2021">
          <TypographyP>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </TypographyP>
        </TimelineItem>
        <TimelineItem
          title="Webrevolve Ltd, United Kingdom"
          subtitle="2016 - 2018"
        >
          <TypographyP>
            I create user-focused, high-performing, accessible websites and
            mobile applications. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna nibh viverra non semper
            suscipit posuere a pede. I create user-focused, high-performing,
            accessible websites and mobile applications. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
            mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh
            viverra non semper suscipit posuere a pede. I create user-focused,
            high-performing, accessible websites and mobile applications. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh viverra non semper suscipit posuere a pede.
          </TypographyP>
        </TimelineItem>
      </Timeline>
    </>
  );
}
