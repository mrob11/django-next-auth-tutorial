from oauth2_provider.oauth2_validators import OAuth2Validator

class CustomOAuth2Validator(OAuth2Validator):

    def get_additional_claims(self, request):
        return {
            "name": " ".join([request.user.first_name, request.user.last_name]).strip(),
            "email": request.user.email,
        }
