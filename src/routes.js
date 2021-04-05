import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Service pages
import history from './services/history'
import AuthLayout from './services/AuthLayout'

import loadable from '@loadable/component'
import Loading from './components/Loading';

// Non-authentication pages begins here
const Help = loadable(() => import('./screens/pages/Help'), {
    fallback: Loading,
})
const About = loadable(() => import('./screens/pages/About'), {
    fallback: Loading,
})
const Contact = loadable(() => import('./screens/pages/Contact'), {
    fallback: Loading,
})
const Terms = loadable(() => import('./screens/pages/Terms'), {
    fallback: Loading,
})
const Privacy = loadable(() => import('./screens/pages/Privacy'), {
    fallback: Loading,
})
const Disclaimer = loadable(() => import('./screens/pages/Disclaimer'), {
    fallback: Loading,
})
const FAQ = loadable(() => import('./screens/pages/FAQ'), {
    fallback: Loading,
})


// Authentication pages begins here
const Fence = loadable(() => import('./screens/auth/Fence'), {
    fallback: Loading,
})
const Login = loadable(() => import('./screens/auth/Login'), {
    fallback: Loading,
})
const Logout = loadable(() => import('./screens/auth/Logout'), {
    fallback: Loading,
})
const User = loadable(() => import('./screens/admin/User'), {
    fallback: Loading,
})
const Report = loadable(() => import('./screens/admin/Report'), {
    fallback: Loading,
})
const Analytics = loadable(() => import('./screens/admin/Analytics'), {
    fallback: Loading,
})
const Manager = loadable(() => import('./screens/admin/Manager'), {
    fallback: Loading,
})
const TypeAnalysis = loadable(() => import('./screens/analytics/TypeAnalysis'), {
    fallback: Loading,
})
const CategoryAnalysis = loadable(() => import('./screens/analytics/CategoryAnalysis'), {
    fallback: Loading,
})
const LocationAnalysis = loadable(() => import('./screens/analytics/LocationAnalysis'), {
    fallback: Loading,
})
const ImpactAnalysis = loadable(() => import('./screens/analytics/ImpactAnalysis'), {
    fallback: Loading,
})
const UserAnalysis = loadable(() => import('./screens/analytics/UserAnalysis'), {
    fallback: Loading,
})
const ReportAnalysis = loadable(() => import('./screens/analytics/ReportAnalysis'), {
    fallback: Loading,
})
const MyAnalytics = loadable(() => import('./screens/analytics/MyAnalytics'), {
    fallback: Loading,
})
const NotFound = loadable(() => import('./screens/pages/NotFound'), {
    fallback: Loading,
})

const AuthRoutes = ({ component: Component, ...rest }) => (
    <Route history={history}
        {...rest}
        render={props => (
            <AuthLayout {...props}>
                <Component {...rest} />
            </AuthLayout>
        )}
    />
);



export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route 
                        exact 
                        path="/" 
                        component={Fence}/>
                    <Route 
                        exact 
                        path="/login" 
                        component={Login}/>
                    <Route 
                        exact 
                        path="/logout" 
                        component={Logout}/>
                    <AuthRoutes
                        path="/user"
                        component={User} />
                    <AuthRoutes
                        path="/report"
                        component={Report} />
                    <AuthRoutes
                        path="/analytics"
                        component={Analytics} />
                    <AuthRoutes
                        path="/manager"
                        component={Manager} />
                    <AuthRoutes
                        path="/type_analysis"
                        component={TypeAnalysis} />
                    <AuthRoutes
                        path="/impact_analysis"
                        component={ImpactAnalysis} />
                    <AuthRoutes
                        path="/category_analysis"
                        component={CategoryAnalysis} />
                    <AuthRoutes
                        path="/location_analysis"
                        component={LocationAnalysis} />
                    <AuthRoutes
                        path="/user_analysis"
                        component={UserAnalysis} />
                    <AuthRoutes
                        path="/report_analysis"
                        component={ReportAnalysis} />
                    <AuthRoutes
                        path="/my_analytics"
                        component={MyAnalytics} />
                    <AuthRoutes
                        path="/help"
                        component={Help} />
                    <AuthRoutes
                        path="/faq"
                        component={FAQ} />
                    <AuthRoutes
                        path="/about"
                        component={About} />
                    <AuthRoutes
                        path="/contact"
                        component={Contact} />
                    <AuthRoutes
                        path="/privacy"
                        component={Privacy} />
                    <AuthRoutes
                        path="/disclaimer"
                        component={Disclaimer} />
                    <AuthRoutes
                        path="/terms"
                        component={Terms} />
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}