<?php
// mailchimp_send.php

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming you're receiving JSON content
    $content = file_get_contents('php://input');
    $data = json_decode($content, true);

    $recipientEmail = $data['recipientEmail'];
    $message = $data['message'];

    // Mailchimp API URL and your List ID
    $url = 'https://us12.api.mailchimp.com/3.0/lists/7de02179a4/members/';

    // Mailchimp API key from your environment or configuration
    $apiKey = '28caf02d868a26cc4553a790d14738b5-us12';

    // Set up the data to send
    $postData = [
        'email_address' => $recipientEmail,
        'status'        => 'subscribed', // or 'pending' for double opt-in
    ];

    $jsonData = json_encode($postData);

    // Use cURL to send the request to Mailchimp
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Check for success
    if ($httpCode === 200) {
        echo json_encode(['success' => true, 'message' => 'Email sent!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email', 'error' => $result]);
    }
} else {
    // Not a POST request, handle accordingly
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>










//example from Mailchimp documentation
<?php
require_once '/path/to/MailchimpTransactional/vendor/autoload.php';

$mailchimp = new MailchimpTransactional\ApiClient();
$mailchimp->setApiKey('28caf02d868a26cc4553a790d14738b5-us12');

$response = $mailchimp->messages->sendTemplate([
    "template_name" => "Saving a Draft of Your Uniquely Configured Item",
    "template_content" => [[]],
    "message" => [],
]);
print_r($response);

?>










<?php
require 'vendor/autoload.php';

use MailchimpTransactional\ApiClient;

$mailchimp = new ApiClient();
$mailchimp->setApiKey('28caf02d868a26cc4553a790d14738b5-us12');

$data = json_decode(file_get_contents('php://input'), true);
$recipientEmail = $data['recipientEmail'];
$productLink = $data['productLink'];

$message = [
    "from_email" => "your@email.com",
    // ... other message settings
    "global_merge_vars" => [
        [
            "name" => "PRODUCTLINK",
            "content" => $productLink
        ]
    ],
    // ... rest of the message array
];


// Prepare the message using a Mailchimp template
$message = [
    "from_email" => "your@email.com",
    "to" => [
        [
            "email" => $recipientEmail,
            "type" => "to"
        ]
    ],
    "template_name" => "your_template_name", // Replace with your Mailchimp template name
    "template_content" => [
        // Add any template content or variables here
    ]
];

try {
    $response = $mailchimp->messages->sendTemplate(["template_name" => $message['template_name'], "template_content" => $message['template_content'], "message" => $message]);
    echo json_encode(['success' => true, 'response' => $response]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>




