import React from 'react';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Breadcrumbs, 
  Link as MuiLink, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Icons
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import StorageIcon from '@mui/icons-material/Storage';
import DeleteIcon from '@mui/icons-material/Delete';
import GavelIcon from '@mui/icons-material/Gavel';
import EmailIcon from '@mui/icons-material/Email';
import CookieIcon from '@mui/icons-material/Cookie';
import UpdateIcon from '@mui/icons-material/Update';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ChatIcon from '@mui/icons-material/ChatOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAltOutlined';

const PrivacyPage = () => {
  const theme = useTheme();
  
  const lastUpdated = 'April 23, 2025';
  
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <InfoIcon color="primary" />,
      content: `This Privacy Policy describes how the Youtube MultiPost service ("we", "us", or "our"), operated by an individual provider, collects, uses, and shares information about you when you use our website, applications, and services (collectively, the "Services").\n\nBy accessing or using the Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree, please do not use the Services.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <DataUsageIcon color="primary" />,
      content: `We collect information you provide directly to us and information we collect automatically when you use the Services.\n\n**Information You Provide:**
* **Account Information:** When you register directly with our service (if applicable), we collect your name and email address. If password-based login is offered, your password is collected but stored only in a securely hashed format, never directly. We may also collect your phone number if you provide it.
* **Subscription & Payment Information:** Our Free plan does not require any payment information. When you subscribe to a paid plan, we collect information necessary to process your payment (such as billing details) through our third-party payment processor (e.g., Midtrans). We do not directly store your full credit card details.
* **YouTube Account Information:** When you connect your YouTube accounts via Google OAuth, we receive information associated with those accounts, such as channel IDs, channel names, profile pictures, and access tokens (stored securely encrypted) necessary to perform actions on your behalf (like uploading videos). This process does not give us access to your Google account password.
* **Video Metadata:** Information you provide for video uploads, such as titles, descriptions, tags, thumbnails, and scheduling details, stored in templates or during the upload process.
* **Support Communications:** Information you provide when you contact us for support via email, AI Chat, or Live Chat, including the content of your messages and any attachments (like images in Live Chat).\n
**Information We Collect Automatically:**
* **Usage Information:** Details about how you interact with the Services, such as features used, actions taken, time spent, and error logs.
* **Device and Connection Information:** Your IP address, browser type, operating system, device identifiers, and general location information derived from your IP address.
* **Cookies and Similar Technologies:** We use cookies (small text files stored on your device) and similar technologies to operate and improve the Services, authenticate users, remember preferences, and analyze usage. See the "Cookies" section for more details.`
    },
    {
      id: 'youtube-data',
      title: 'YouTube API Services',
      icon: <StorageIcon color="primary" />,
      content: `Our use of information received from YouTube API Services adheres strictly to the Google API Services User Data Policy, including the Limited Use requirements.\n\n* **Purpose:** We access and use your YouTube data (channel info, video upload capabilities, analytics data if applicable) solely to provide the core functionality of the Service – enabling you to manage and upload videos to your connected channels according to your instructions.\n* **No Unauthorized Sharing:** Information obtained via the YouTube API is not shared with third parties except as necessary to provide or improve the Service features you use, comply with applicable laws, or as part of a merger, acquisition, or sale of assets.\n* **User Control:** You grant us access via Google's standard OAuth consent screen. You can review and revoke this access at any time through [your Google Account security settings](https://security.google.com/settings/security/permissions).\n* **Compliance:** By using the Service, you also agree to [YouTube's Terms of Service](https://www.youtube.com/t/terms) and [Google's Privacy Policy](https://policies.google.com/privacy).`
    },
    {
      id: 'ai-live-chat-data',
      title: 'AI Assistant and Live Chat Data',
      icon: <ChatIcon color="primary" />,
      content: `* **AI Assistant (Gemini):** Interactions with the AI Assistant are processed by Google's Gemini models. We may log prompts and responses (excluding sensitive personal data where possible) to monitor usage and improve the assistant's helpfulness within our Service. Your use is also subject to Google's applicable terms and privacy policies regarding Gemini.
* **Live Chat:** Conversations between you and our administrators via Live Chat, including text messages and shared images, are stored securely to maintain a record of support interactions and for quality assurance purposes. Access is restricted to authorized personnel.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: <CookieIcon color="primary" />,
      content: `We use cookies and similar technologies (like local storage) for purposes such as:\n* **Authentication:** Keeping you logged in.\n* **Preferences:** Remembering your settings and preferences.\n* **Security:** Helping detect malicious activity and violations of our terms.\n* **Analytics:** Understanding how you use the Services so we can improve them.\n\nYou can usually configure your browser to refuse cookies or alert you when cookies are being sent. However, disabling essential cookies may prevent certain parts of the Service from functioning correctly.`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <DataUsageIcon color="primary" />,
      content: `We use the collected information for various purposes:\n* To operate, maintain, and provide the features of the Service (e.g., processing uploads, managing accounts, enforcing plan limits).\n* To process your subscription payments and manage your subscription status.\n* To authenticate you and prevent unauthorized access.\n* To respond to your support requests and communicate with you via email, AI Chat, or Live Chat.\n* To send important administrative or service-related messages (e.g., updates, security alerts, billing notifications).\n* To monitor and analyze usage trends and improve the Services' performance, usability, and features.\n* To detect and prevent fraud, abuse, and security incidents.\n* To comply with legal obligations.`
    },
    {
      id: 'information-sharing',
      title: 'How We Share Your Information',
      icon: <SecurityIcon color="primary" />,
      content: `We do not sell your personal information. We may share your information only in the following limited circumstances:\n* **Service Providers:** With third-party vendors and service providers who need access to your information to perform services on our behalf (e.g., payment processing with Midtrans, hosting services, email delivery, API providers like Google for OAuth/YouTube/Gemini).\n* **Legal Requirements:** If required by law, regulation, legal process, or governmental request (e.g., responding to a subpoena or court order).\n* **Protection of Rights:** To protect the rights, property, or safety of the Youtube MultiPost service, our users, or the public, as required or permitted by law.\n* **Business Transfers:** If the service or substantially all of its assets are acquired by a third party, user information may be one of the transferred assets. We will notify you before your information is transferred and becomes subject to a different privacy policy.\n* **With Your Consent:** We may share information with third parties when we have your explicit consent to do so.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <SecurityIcon color="primary" />,
      content: `We implement technical and organizational measures to protect your information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. This includes:

• **Password Security:** When using email/password authentication, passwords are never stored directly. Instead, they are securely hashed using industry-standard hashing algorithms designed for password protection.
• **OAuth Security:** When connecting YouTube accounts, we never receive or store your Google password. The authentication process happens directly with Google.
• **Token Encryption:** YouTube API access tokens are encrypted using AES-256-GCM encryption with proper initialization vectors and authentication tags before being stored in our database.
• **Transport Layer Security:** All communications with our service use SSL/TLS encryption (HTTPS).
• **Rate Limiting:** We employ rate limiting to protect against brute force login attempts and other potential security threats.
• **Input Validation:** We validate all user inputs to help protect against common web vulnerabilities.

However, no internet transmission or electronic storage method is 100% secure, so we cannot guarantee absolute security.`
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <DeleteIcon color="primary" />,
      content: `We retain your personal information for as long as your account is active or as needed to provide you the Services. We may also retain information to comply with legal obligations, resolve disputes, enforce our agreements, and for legitimate business purposes (e.g., aggregated analytics data).\n\nWhen you request account deletion, we will delete your personal information within a reasonable timeframe (e.g., 30-90 days), subject to any legal or operational retention needs.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: <GavelIcon color="primary" />,
      content: `Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, update, or request deletion of your data. You can typically manage your account information through your profile settings within the Service.\n\n* **Account Information:** You can review and update your profile information (name, email, phone) in your account settings.
* **YouTube Connection:** You can manage or revoke our access to your YouTube account(s) via your Google Account settings.
* **Marketing Communications:** You can opt-out of promotional emails by following the unsubscribe link in the email.
* **Data Requests:** To exercise other rights (access, deletion), please contact us using the information below. We will respond to your request in accordance with applicable laws.`
    },
    {
      id: 'childrens-privacy',
      title: 'Children\'s Privacy',
      icon: <ChildCareIcon color="primary" />,
      content: `The Services are not directed to individuals under the age of 13 (or a higher age if required by applicable law). We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information without parental consent, we will take steps to delete such information.`
    },
    {
      id: 'changes',
      title: 'Changes to Our Privacy Policy',
      icon: <UpdateIcon color="primary" />,
      content: `We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated policy on this page, updating the "Last Updated" date, and potentially through other means (like email or an in-app notification) before the changes take effect. We encourage you to review this policy periodically.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <EmailIcon color="primary" />,
      content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:\n\n**Email:** support@multipost.pro`
    }
  ];
  
  return (
    <Box 
      component="main" 
      sx={{ 
        minHeight: '100vh',
        pb: 10, 
        pt: { xs: 14, sm: 16, md: 18 }
      }}
    >
      <SEO
        title="Privacy Policy"
        description="Read MultiPost's Privacy Policy. Learn how we collect, use, and protect your data on our free video distribution and auto posting platform."
        path="/privacy"
      />
      {/* Header */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          pt: 4,
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs 
            aria-label="breadcrumb" 
            sx={{ 
              mb: 4,
              '& .MuiBreadcrumbs-ol': {
                color: 'rgba(255, 255, 255, 0.7)'
              },
              '& .MuiBreadcrumbs-li a': {
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            }}
          >
            <MuiLink component={Link} to="/">
              Home
            </MuiLink>
            <Typography color="inherit">Privacy Policy</Typography>
          </Breadcrumbs>
          
          <Typography 
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h2" 
            fontWeight={700}
            gutterBottom
          >
            Privacy Policy
          </Typography>
          
          <Typography 
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="h6" 
            sx={{ 
              maxWidth: 700,
              mb: 2, 
              opacity: 0.9 
            }}
          >
            Your privacy is important to us. This policy outlines what information we collect, how we use it, and your rights regarding your data.
          </Typography>
          
          <Typography 
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variant="body1" 
            sx={{ opacity: 0.8 }}
          >
            Last Updated: {lastUpdated}
          </Typography>
        </Container>
      </Box>
      
      <Container 
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        maxWidth="lg"
        sx={{ 
          mt: -4, 
          position: 'relative', 
          zIndex: 2 
        }}
      >
        <Paper 
          elevation={2} 
          sx={{ 
            borderRadius: 4, 
            p: { xs: 3, md: 5 },
            mb: 4,
          }}
        >
          {/* Table of Contents */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Table of Contents
            </Typography>
            <Divider sx={{ my: 2 }} />
            <List dense disablePadding>
              {sections.map((section) => (
                <ListItem 
                  key={section.id} 
                  component="a" 
                  href={`#${section.id}`}
                  sx={{ 
                    py: 0.5,
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {section.icon}
                  </ListItemIcon>
                  <ListItemText primary={section.title} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Policy Sections */}
          {sections.map((section) => (
            <Box 
              key={section.id} 
              id={section.id} 
              sx={{ 
                scrollMarginTop: 100,
                mb: 6 
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ mr: 2 }}>
                  {section.icon}
                </Box>
                <Typography variant="h5" fontWeight={600}>
                  {section.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              <ReactMarkdown
                components={{
                  p: ({node, ...props}) => <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }} {...props} />,
                  
                  a: ({node, ...props}) => (
                    <MuiLink 
                      {...props} 
                sx={{ 
                        color: 'primary.main', 
                        textDecoration: 'underline', 
                        '&:hover': { color: 'primary.dark' }
                      }}
                    />
                  ),

                  ul: ({node, ...props}) => <ul style={{ paddingLeft: '24px', marginBottom: '16px' }} {...props} />,

                  li: ({node, ...props}) => <li style={{ marginBottom: '8px' }}><Typography component="span" variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }} {...props} /></li>,

                  strong: ({node, ...props}) => <Typography component="span" fontWeight="fontWeightBold" sx={{ color: 'text.primary' }} {...props} />,
                }}
              >
                {section.content}
              </ReactMarkdown>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPage; 