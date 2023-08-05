import "./App.css";
import Card from "./card";

function App() {
  const data = [
    {
      plan: "FREE",
      price: "$0",
      user: "Single User",
      highlight: false,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      subDomainHighlight: false,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PLUS",
      price: "$9",
      user: "5 User",
      highlight: true,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight: true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PRO",
      price: "$49",
      user: "Unlimited User",
      highlight: true,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight:true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((e, i) => {
              return <Card value={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;